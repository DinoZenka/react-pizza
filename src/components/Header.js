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
        <Link to='/' className='flex'>
          <div>
            <img src={logo} className='flex-shrink-0 mt-2' alt='img: logo' />
          </div>
          <div className='ml-4'>
            <h1 className='text-xl font-bold uppercase'>
              react pizza
            </h1>
            <div className='text-gray-700'>
              самая вкусная пицца во вселенной
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
