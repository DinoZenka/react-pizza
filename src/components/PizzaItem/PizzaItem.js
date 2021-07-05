
import React from 'react';
import PropTypes from 'prop-types';

const pizzasDough = ['Тонкое', 'Традиционное'];
const pizzasSises = [26, 30, 40];

const PizzaItem = ({ id, imageUrl, name, sizes, price, types, onAddPizza, count }) => {

  const [dough, setDough] = React.useState(pizzasDough[types[0]]);
  const [size, setSize] = React.useState(sizes[0])
  const [addedCount, setAddedCount] = React.useState(null);
  const onAddPizzaClick = () => {
    const obj = {
      id,
      imageUrl,
      name,
      price,
      size: size,
      dough: dough
    }
    setAddedCount((old) => old > 98 ? 99 : old + 1)
    onAddPizza(obj);
  }

  return (
    <div className='flex flex-col px-2 pt-3 mx-2 my-4 text-center duration-300 mx:px-4 hover:shadow-2xl hover:transform hover:scale-105 hover:duration-300 rounded-xl'>
      <img width='80%' height='auto' src={imageUrl} alt='pizza name' className='mx-auto'></img>
      <p className='my-4 font-bold'>{name}</p>
      <div className='w-full bg-[#F3F3F3] rounded-lg p-2 '>
        <div className='flex'>
          {
            pizzasDough.map((elem, index) => {
              const classes = 'w-1/2 mx-px py-2 rounded-md cursor-pointer ' + (dough === elem ? 'bg-[#fff] ' : '') + (types.includes(index) ? ' text-black' : ' pointer-events-none text-gray-400 ')

              return <p key={`${elem}_${elem}`} className={classes} onClick={() => { setDough(elem) }}>{elem}</p>
            })
          }
        </div>
        <div className='flex mt-2 text-center'>
          {
            pizzasSises.map(elem => {
              let classes = 'w-1/3 px-2 py-2 mx-px rounded-md cursor-pointer ' + (size === elem ? ' bg-[#fff] ' : '') +
                (sizes.includes(elem) ? ' text-black ' : ' pointer-events-none text-gray-400 ');
              return <p key={elem} className={classes} onClick={() => { setSize(elem) }}>{`${elem} cm.`}</p>
            })
          }
        </div>
      </div>
      <div className='flex items-center justify-between my-4'>
        <span className='ml-2 text-xl font-bold'>{`от ${price} ₽`}</span>
        <button className='px-3 py-2 rounded-full border-2 border-[#EB5A1E] flex justify-between text-[#EB5A1E] font-medium items-center hover:bg-[#EB5A1E] hover:text-[#fff] hover:duration-300 duration-300 group'
          onClick={onAddPizzaClick}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-[#EB5A1E] group-hover:fill-[#fff] group-hover:duration-300 duration-300"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
            />
          </svg>
          <p className='mx-1 font-semibold'>Добавить</p>
          {count && <div className='w-6 h-6 p-0.5 bg-[#EB5A1E] rounded-full center text-white text-sm group-hover:bg-white group-hover:text-[#EB5A1E]'>{count}</div>}

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
