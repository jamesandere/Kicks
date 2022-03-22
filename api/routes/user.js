const User = require("../models/User");
const router = require("express").Router();
const CryptoJS = require('crypto-js');
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, {new: true});
    res.status(200).json(updUser);
  } catch (error) {
      res.status(500).json(error);
  }
});

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
    res.status(200).json('Successfully deleted user.')
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const qNew = req.query.new;

    try {
        const users = qNew ? await User.find().sort({_id: -1}).limit(2)
        : await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;
