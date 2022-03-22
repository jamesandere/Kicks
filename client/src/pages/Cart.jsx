import '../pages/cart.css';
import { arrivalsList } from '../data';
import { Add, Remove, RemoveCircle } from '@material-ui/icons';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cart = useSelector(state=> state.cart);
    console.log(cart);

  return (
    <div className="cart">
        <div className="c-left">
            {cart.products.map(shoe => (<div key={shoe._id} className="item">
                <img src={shoe.pics[0]} />
                <div className="item-details">
                    <span><b>Product:</b> {shoe.title}</span>
                    <span><b>Size:</b> {shoe.size}</span>
                    <span><b>Color:</b> {shoe.color.map(x=> x)}</span>
                </div>
                <div className="item-count">
                <div className="amt">
                <Remove />
                <span>{shoe.quantity}</span>
                <Add  />
            </div>
            <div className="item-price">{shoe.price * shoe.quantity}</div>
                </div>
            </div>))}
            <hr />
        </div>
        <div className="c-right">
            <div className="check">
            <h2>Cart Summary</h2>
            <span>Subtotal: ${cart.total}</span>
            <span>Estimated Shipping: $10.00</span>
            <span>Discount: $20.00</span>
            <span>Total: ${cart.total + 10.00 - 20.00}</span>
            <button>Checkout Now</button>
            </div>
        </div>
    </div>
  )
}

export default Cart