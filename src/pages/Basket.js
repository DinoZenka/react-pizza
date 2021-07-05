import { BasketItem } from "../components";
import { Link } from 'react-router-dom'
import { FiTrash2, FiShoppingCart, FiChevronLeft } from 'react-icons/fi';
import { useDispatch, useSelector } from "react-redux";
import { clearBasket, removePizzaLine, minusPizza, plusPizza } from "../redux/actions/basket";
import basket_img from '../assets/shopping-cart-colour 1.png';

function Basket() {
  const dispatch = useDispatch();

  const { items, totalCount, totalPrice } = useSelector(({ basket }) => basket);
  const addedItems = Object.keys(items).map(key => {
    return items[key].items[0];
  })

  const onClearBasket = () => {
    if (window.confirm('R u sure want to clear basket?')) {
      dispatch(clearBasket());
    }
  }
  const onRemovePizza = (id) => {
    if (window.confirm('Sure?')) {
      dispatch(removePizzaLine(id));
    }
  }

  const onMinusPizza = (id) => {
    dispatch(minusPizza(id));
  }

  const onPlusPizza = (id) => {
    dispatch(plusPizza(id));
  }

  const onPaymentClick = () => {
    window.alert("OK! You bought all pizzas! Check your credit card balance...");
  }



  return (
    <div className='w-full max-w-3xl mx-auto'>
      {
        totalCount ? <>
          <div className='flex flex-col items-center justify-between my-12 sm-480:flex-row'>
            <div className='flex items-center'>
              <FiShoppingCart size="30px" />
              <h1 className='ml-2 text-3xl'>Корзина</h1>
            </div>
            <div className='flex items-center mt-4 cursor-pointer group sm-480:mt-0' onClick={onClearBasket}>
              <FiTrash2 size="20px" stroke='#B6B6B6' className='group-hover:stroke-[#000] duration-300' />
              <p className='mt-1 ml-2 text-lg text-[#B6B6B6] group-hover:text-[#000] duration-300'>Очистить корзину</p>
            </div>
          </div>
          <div>
            {
              addedItems.map(elem => {
                // console.log(elem)
                return <BasketItem
                  id={elem.id}
                  pizzaImg={elem.imageUrl}
                  title={elem.name}
                  type={elem.dough}
                  size={elem.size}
                  price={items[elem.id].totalPrice}
                  totalCount={items[elem.id].items.length}
                  onRemovePizza={onRemovePizza}
                  onMinusPizza={onMinusPizza}
                  onPlusPizza={onPlusPizza}
                />
              })
            }
          </div>
          <div className='flex flex-col justify-between mt-8 ml-12 text-lg sm-480:flex-row sm-480:ml-0'>

            <p>
              Всего пицц:
              <span className='font-bold'> {totalCount} шт.</span>
            </p>
            <p>
              Сумма заказа:
              <span className='text-[#FE5F1E] font-bold'> {totalPrice} ₽</span>
            </p>

          </div>
          <div className='flex flex-col-reverse items-center justify-center mt-12 sm-480:justify-between sm-480:flex-row'>
            <Link to='/react_pizza' className='w-48 mt-2 sm-480:mt-0 border-2 border-[#D3D3D3] flex py-3 rounded-full justify-center group duration-300 hover:border-[#000] items-center'>
              <FiChevronLeft stroke="#B6B6B6" className='ml-2 group-hover:stroke-[#000] duration-300' />
              <p className='pr-4 mx-2 text-[#CACACA] group-hover:text-[#000] duration-300'>Вернуться назад</p>
            </Link>
            <button className='w-48 h-12  bg-[#FE5F1E] rounded-full text-white hover:border-2 hover:border-[#000] duration-300' onClick={onPaymentClick}>Оплатить сейчас</button>
          </div>
        </> :
          <div className='flex flex-col items-center p-10 text-center flex-center'>
            <h1 className='mb-6 text-3xl font-bold'>Корзина пустая 😕</h1>
            <p className='opacity-50'>Вероятней всего, вы не заказывали ещё пиццу.
              Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            <img width="300px" src={basket_img} alt='basket: empty' className="my-12" />
            <Link to='/react_pizza' className='w-48 bg-[#282828] px-4 py-3 rounded-full duration-300 text-white hover:text-[#FE5F1E] hover:border-1 hover:border-[#FE5F1E]'>Вернуться назад</Link>
          </div>
      }
    </div>
  )
}

export default Basket
