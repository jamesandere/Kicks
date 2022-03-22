const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');

const path = require("path");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('DB connection successful'))
.catch((err)=> console.log(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use(express.static(path.resolve(__dirname, "./client/build")));

// app.get("*", function (request, response) {
//     response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
//   });

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.listen(process.env.PORT, ()=> console.log(`Sever started on port ${process.env.PORT}`));