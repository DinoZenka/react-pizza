import { Link } from 'react-router-dom';
// import basket from '../assets/basket-icon.svg';
import { FiShoppingCart } from 'react-icons/fi';
import '../css/components/button.scss';

const Button = ({ total }) => {
  return (
    <Link to='/basket' className='button'>
      <h3>
        {total.totalPrice} ₽
      </h3>
      <div className="v-line"></div>
      <div className='basket'>
        <FiShoppingCart strokeWidth="3px" className="icon" />
        <span className='count'>{total.totalCount}</span>
      </div>
    </Link>
  )
}

export default Button;
