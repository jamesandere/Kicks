import '../components/arrivals.css';
import ArrivalsCard from '../components/ArrivalsCard';
import { arrivalsList } from '../data';
import axios from "axios";
import { useState, useEffect } from 'react';

const Arrivals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (error) {
        
      }
    }
    getProducts();
  }, [])

  return (
    <div>
        <h2 className="arrival-heading">New Arrivals</h2>
        <div className="arrival-cont">
        {products.map(arrival => (
            <ArrivalsCard key={arrival._id} arrival={arrival} />
        ))}
        </div>
    </div>
  )
}

export default Arrivals