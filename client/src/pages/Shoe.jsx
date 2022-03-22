import '../pages/shoe.css';
import { arrivalsList } from '../data';
import { Add, Remove } from '@material-ui/icons';
import {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { addProduct } from '../reducers/cartRedux';
import { useDispatch } from 'react-redux';

const Shoe = () => {
    const [quantity, setQuantity] = useState(1);
    const [shoe, setShoe] = useState({});
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    const location = useLocation();
    const path = location.pathname.split("/")[2];

    // const shoe = arrivalsList.find(shoe => shoe.id.toString() === path);

    const handleClick = () => {
        dispatch(
            addProduct({...shoe, quantity, size})
        );
    }

    useEffect(()=> {
        const getProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/products/${path}`);
            setShoe(res.data);
            console.log(res.data);
            } catch (error) {
                
            }
        }
        getProduct();
    }, [path])

    const handleQuantity = (type) => {
        if(type==="dec"){
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    }
  return (
    <div className="shoe-wrap">
        <div className="shoe-cont">
        <div className="left">
            <div className="img-cont">
                {/* <div className="shoePics">
                {shoe.pics?.map((i)=> (
                    <img src={i}/>
                ))}
                </div>
                <img className="mainPic" src={shoe.pics[0]} /> */}
            </div>
        </div>
        <div className="right">
            <h1>{shoe.title}</h1>
            <div className="price">€{shoe.price}</div>
            <div className="sku"><span>SKU</span> DH9751-100</div>
            <div className="select-cont">
                <h3>Size</h3>
            <select onChange={((e)=> setSize(e.target.value))}>
                <option value="" selected disabled className="optionTitle">Choose your size</option>
                {shoe.size?.map((s)=> (
                    <option>{s.toString()}</option>
                ))}
            </select>
            </div>
            <h3>Quantity</h3>
            <div className="amount-container">
                <Remove onClick={()=> handleQuantity("dec")} />
                <span>{quantity}</span>
                <Add onClick={()=> handleQuantity("add")} />
            </div>
            <button className="btn-add" onClick={handleClick}>Add to cart</button>
            <button className="btn-buy">Buy Now</button>
        </div>
    </div>
    <div className="shoe-deets">
        <h1>Products Details</h1>
        <hr />
        <p>{shoe.desc}</p>
    </div>
    <div className="specs">
        <h1>Specifications</h1>
        <hr />
        <div className="tab">
            <div className="tab-card">
                <h2>Key Features</h2>
                <hr />
                <h3>N/A</h3>
            </div>
            <div className="tab-card">
                <h2>Brand</h2>
                <hr />
                <h3>N/A</h3>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Shoe