import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Button } from './index';

const Header = () => {
  const total = useSelector((state) => ({
    totalPrice: state.basket.totalPrice,
    totalCount: state.basket.totalCount
  }
  ))
  return (
    <>
      <div className='flex justify-between py-4'>
        <Link to='/react_pizza' className='flex'>
          <div>
            <img src={logo} className='flex-shrink-0 mt-2 sm-480:mt-4 sm:mt-0' alt='img: logo' />
          </div>
          <div className='mt-0 ml-4 sm:mt-2'>
            <h1 className='flex flex-col text-xl font-bold uppercase sm-480:flex-row'>
              <p>react</p>
              <p>pizza</p>
            </h1>
            <div className='flex-col hidden text-gray-700 sm:flex-row sm-480:flex'>
              <p>самая вкусная пицца</p>
              <p> во вселенной</p>
            </div>
          </div>
        </Link>
        <Button total={total} amount="8" />
      </div>
      <div className="h-px w-19/20 bg-[#F6F6F6] mx-auto mt-4 mb-8"></div>
    </>
  )
}

export default Header;
