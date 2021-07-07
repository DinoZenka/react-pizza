import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Button } from './index';
import '../css/components/header.scss';

const Header = () => {
  const total = useSelector((state) => ({
    totalPrice: state.basket.totalPrice,
    totalCount: state.basket.totalCount
  }
  ))
  return (
    <>
      <div className='header'>
        <Link to='/react_pizza'>
          <div>
            {/* className='flex-shrink-0 mt-2 sm-480:mt-4 sm:mt-0' */}
            <img src={logo} alt='img: logo' />
          </div>
          <div className='title'>
            <h1 className='name'>
              <p>react</p>
              <p>pizza</p>
            </h1>
            <div className='descr'>
              <p>самая вкусная пицца</p>
              <p> во вселенной</p>
            </div>
          </div>
        </Link>
        <Button total={total} />
      </div>
      <div className="line"></div>
    </>
  )
}

export default Header;
