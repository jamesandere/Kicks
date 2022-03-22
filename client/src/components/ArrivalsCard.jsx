import { Link } from 'react-router-dom';
import '../components/arrivals.css';

const ArrivalsCard = ({arrival}) => {
  const first = arrival.pics[0];
  const second = arrival.pics[1];
  console.log(first.toString());
  return (
    <div className="arrival-card">
        
        <img src={first} alt={arrival.title}
         onMouseOver={e => e.currentTarget.src = second} />
         <Link className="link-card" to={`/shoe/${arrival._id}`}>
        <h3>{arrival.title}</h3>
        </Link>
    </div>
  )
}

export default ArrivalsCard