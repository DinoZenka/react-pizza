import React from 'react';
import PropTypes from 'prop-types';

import '../../css/components/pizzaItem.scss';

const pizzasDough = ['Тонкое', 'Традиционное'];
const pizzasSises = [26, 30, 40];

const PizzaItem = ({ id, imageUrl, name, sizes, price, types, onAddPizza, count }) => {

  const [dough, setDough] = React.useState(pizzasDough[types[0]]);
  const [size, setSize] = React.useState(sizes[0])
  const onAddPizzaClick = () => {
    const obj = {
      id,
      imageUrl,
      name,
      price,
      size: size,
      dough: dough
    }
    onAddPizza(obj);
  }

  return (
    <div className='pizza-item'>
      <img width='80%' height='auto' src={imageUrl} alt='pizza name'></img>
      <p className='title'>{name}</p>
      <div className='available-container'>
        <div className='dough'>
          {
            pizzasDough.map((elem, index) => {
              const classes = 'dough-item ' + (dough === elem ? ' active ' : '') + (types.includes(index) ? ' includes ' : ' not-includes ')

              return <p key={`${elem}_${elem}`} className={classes} onClick={() => { setDough(elem) }}>{elem}</p>
            })
          }
        </div>
        <div className='sizes'>
          {
            pizzasSises.map(elem => {
              let classes = 'sizes-item ' + (size === elem ? ' active ' : '') +
                (sizes.includes(elem) ? ' includes ' : ' not-includes ');
              return <p key={elem} className={classes} onClick={() => { setSize(elem) }}>{`${elem} cm.`}</p>
            })
          }
        </div>
      </div>
      <div className='buy-container'>
        <span className='price'>{`от ${price} ₽`}</span>
        <button className='btn --buy-btn'
          onClick={onAddPizzaClick}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            className="buy-img"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
            />
          </svg>
          <p>Добавить</p>
          {count && <div className='counter'>{count}</div>}
        </button>
      </div>
    </div>
  )
}

PizzaItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  onAddPizza: PropTypes.func
}

PizzaItem.defaultProps = {
  price: 0,
  name: 'pizza',
  sizes: [],
  types: []
}

export default PizzaItem;
