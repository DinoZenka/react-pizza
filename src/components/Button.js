import { Link } from 'react-router-dom';
// import basket from '../assets/basket-icon.svg';
import { FiShoppingCart } from 'react-icons/fi';

const Button = ({ total }) => {
  return (
    <Link to='/basket' className='flex items-center px-2 text-white bg-[#FE5F1E] rounded-full flex-between relative font-bold duration-300 hover:bg-[#ffb555] hover:duration-300'>
      <h3 className='mx-3'>
        {total.totalPrice} ₽
      </h3>
      <div className="w-px h-6 bg-white opacity-25"></div>
      <div className='flex ml-2'>
        {/* <img src={basket} alt='svg: basket-icon' className="mb-1 ml-1" /> */}
        <FiShoppingCart strokeWidth="3px" className="mt-0.5 ml-1 bold" />
        <span className='ml-1.5 mr-3'>{total.totalCount}</span>
      </div>
    </Link>
  )
}

export default Button;
