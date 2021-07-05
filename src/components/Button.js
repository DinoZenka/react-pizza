import { Link } from 'react-router-dom';
// import basket from '../assets/basket-icon.svg';
import { FiShoppingCart } from 'react-icons/fi';

const Button = ({ total }) => {
  return (
    <Link to='/basket' className='flex items-center px-2 h-12 text-white bg-[#FE5F1E] rounded-full flex-between relative font-bold duration-300 hover:bg-[#ffb555] hover:duration-300'>
      <h3 className='hidden mx-3 sm-480:block'>
        {total.totalPrice} ₽
      </h3>
      <div className="hidden w-px h-6 bg-white opacity-25 sm-480:block"></div>
      <div className='flex ml-2'>
        <FiShoppingCart strokeWidth="3px" className="mt-0.5 ml-1 bold" />
        <span className='ml-1.5 mr-3'>{total.totalCount}</span>
      </div>
    </Link>
  )
}

export default Button;
