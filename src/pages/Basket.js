import React from 'react';

import { BasketItem } from "../components";
import { Link } from 'react-router-dom'
import { FiTrash2, FiShoppingCart, FiChevronLeft } from 'react-icons/fi';
import { useDispatch, useSelector } from "react-redux";
import { clearBasket, removePizzaLine, minusPizza, plusPizza } from "../redux/actions/basket";
import basket_img from '../assets/shopping-cart-colour 1.png';
import '../css/pages/basket.scss';

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
    <div className='basket-container'>
      {
        totalCount ? <>
          <div className='basket-header'>
            <div className='basket-image-container'>
              <FiShoppingCart size="30px" />
              <h1 className=''>Корзина</h1>
            </div>
            <div className='basket-delete-container' onClick={onClearBasket}>
              <FiTrash2 size="20px" stroke='#B6B6B6' className='delete-basket-img' />
              <p className='delete-basket-text'>Очистить корзину</p>
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
          <div className='basket-total'>

            <p>
              Всего пицц:
              <span className='total-amount'> {totalCount} шт.</span>
            </p>
            <p>
              Сумма заказа:
              <span className='total-price'> {totalPrice} ₽</span>
            </p>

          </div>
          <div className='basket-footer-container'>
            <Link to='/' className='back-button'>
              <FiChevronLeft stroke="#B6B6B6" className='back-img' />
              <p className='back-text'>Вернуться назад</p>
            </Link>
            <button className='buy-button' onClick={onPaymentClick}>Оплатить сейчас</button>
          </div>
        </> :
          <div className='empty-basket-container'>
            <h1 className='empty-basket-title'>Корзина пустая 😕</h1>
            <p className='empty-basket-descr'>Вероятней всего, вы не заказывали ещё пиццу.
              Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            <img width="300px" src={basket_img} alt='basket: empty' className="empty-basket-image" />
            <Link to='/' className='empty-basket-button'>Вернуться назад</Link>
          </div>
      }
    </div>
  )
}

export default Basket
