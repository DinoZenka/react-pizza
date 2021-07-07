import React from 'react';

import { BsPlusCircle, BsDashCircle, BsXCircle } from 'react-icons/bs';
import '../css/components/basketItem.scss';

const BasketItem = ({ id, pizzaImg, title, price, type, size, totalCount, onRemovePizza, onMinusPizza, onPlusPizza }) => {
  const IconSize = '27px';
  const IconFill = "#FE5F1E";

  const onRemoveItem = () => {
    onRemovePizza(id);

  }

  return (
    <div className='basket-item'>
      <div className='img-title-container'>
        <img width="90px" src={pizzaImg} alt='img: basket' />
        <div className='title-container'>
          <p className="title">
            {title}
          </p>
          <p className="size">
            {`${type} тесто, ${size} см.`}
          </p>
        </div>
      </div>
      <div className="buttons-container">
        <div className='plus-minus-container'>
          <BsDashCircle
            size={IconSize}
            fill={IconFill}
            onClick={() => { onMinusPizza(id) }}
            className='icon icon-minus' />
          <span className="count ">{totalCount}</span>
          <BsPlusCircle
            size={IconSize}
            fill={IconFill}
            onClick={() => { onPlusPizza(id) }}
            className='icon icon-plus' />
        </div>
        <span className='price'>{price} ₽</span>
        <BsXCircle
          onClick={onRemoveItem}
          size={IconSize}
          fill="gray"
          className="icon icon-delete" />
      </div>
    </div>
  )
}

export default BasketItem;