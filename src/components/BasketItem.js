import { BsPlusCircle, BsDashCircle, BsXCircle } from 'react-icons/bs';


const BasketItem = ({ id, pizzaImg, title, price, type, size, totalCount, onRemovePizza }) => {
  const IconSize = '27px';
  const IconFill = "#FE5F1E";

  const onRemoveItem = () => {
    onRemovePizza(id);

  }

  return (
    <div className='flex items-center px-8 py-6 border-t-2 last:border-b-2 border-aqua hover:shadow-xl'>
      <div className='flex items-center w-3/5'>
        <img width="90px" src={pizzaImg} alt='img: basket' />
        <div className='ml-2'>
          <p className="text-lg font-bold">
            {title}
          </p>
          <p className="font-thin">
            {`${type} тесто, ${size} см.`}
          </p>
        </div>
      </div>
      <div className="flex justify-between w-2/5">
        <div className='flex items-center '>
          <BsDashCircle size={IconSize} fill={IconFill} className='hover:fill-[#a9534f] cursor-pointer duration-300' />
          <span className="w-10 px-2 text-center ">{totalCount}</span>
          <BsPlusCircle size={IconSize} fill={IconFill} className='hover:fill-[#5cb85c] cursor-pointer duration-300' />
        </div>
        <span className='font-bold'>{price} ₽</span>
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