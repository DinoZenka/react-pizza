import { BsPlusCircle, BsDashCircle, BsXCircle } from 'react-icons/bs';


const BasketItem = ({ id, pizzaImg, title, price, type, size, totalCount, onRemovePizza, onMinusPizza, onPlusPizza }) => {
  const IconSize = '27px';
  const IconFill = "#FE5F1E";

  const onRemoveItem = () => {
    onRemovePizza(id);

  }

  return (
    <div className='flex flex-col items-center py-6 border-t-2 sm-480:px-2 sm:px-8 last:border-b-2 border-aqua hover:shadow-xl md-860:flex-row'>
      <div className='flex flex-col items-center justify-center w-full sm-480:w-80 sm-480:justify-start sm-480:flex-row md-860:w-3/5'>
        <img width="90px" src={pizzaImg} alt='img: basket' />
        <div className='mt-4 ml-2 text-center sm-480:text-left sm-480:mt-0'>
          <p className="text-lg font-bold ">
            {title}
          </p>
          <p className="font-thin">
            {`${type} тесто, ${size} см.`}
          </p>
        </div>
      </div>
      <div className="flex justify-between w-full mt-6 ph:justify-center md-860:w-2/5">
        <div className='flex items-center '>
          <BsDashCircle
            size={IconSize}
            fill={IconFill}
            onClick={() => { onMinusPizza(id) }}
            className='hover:fill-[#a9534f] cursor-pointer duration-300' />
          <span className="w-10 px-2 text-center ">{totalCount}</span>
          <BsPlusCircle
            size={IconSize}
            fill={IconFill}
            onClick={() => { onPlusPizza(id) }}
            className='hover:fill-[#5cb85c] cursor-pointer duration-300' />
        </div>
        <span className='font-bold sm-480:mx-12 md:mx-2 ph:w-20 ph:text-center '>{price} ₽</span>
        <BsXCircle
          onClick={onRemoveItem}
          size={IconSize}
          fill="gray"
          className="hover:fill-[#292b2c] duration-300 cursor-pointer" />
      </div>
    </div>
  )
}

export default BasketItem;