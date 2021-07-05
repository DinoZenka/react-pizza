import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import React, { useEffect, useRef, useState } from 'react';

const SortPopup = React.memo((props) => {
  const [visiblePopup, setVisible] = useState(false);
  const activeItem = props.availableItems.find(obj => obj.type === props.activeType).name;

  const sertRef = useRef();

  const handleClick = (e) => {
    const path = e.path || e.composedPath();
    if (!path.includes(sertRef.current) && visiblePopup) {
      setVisible(false);
    }
  }

  const selectItem = (elem) => {
    props.setSortBy(elem.type);
    setVisible(false)
  }

  useEffect(() => {
    document.body.addEventListener('click', handleClick)
    return () => {
      document.body.removeEventListener('click', handleClick);
    }
  });

  return (
    <div ref={sertRef} className='relative flex items-center w-64'>
      <span>
        {visiblePopup ? <FaCaretDown /> : <FaCaretUp />}
      </span>
      <p className='ml-1 mr-2'>Сортировка по:</p>
      <span className="text-[#FE5F1E] border-dotted  border-b-2 border-[#FE5F1E] cursor-pointer" onClick={() => { setVisible(!visiblePopup) }}>{activeItem}</span>
      {visiblePopup &&
        <div className="absolute z-50 top-10 right-4">
          <ul className="bg-[#fff] py-4 rounded-xl shadow-xl z-10">
            {
              props.availableItems.map((elem, index) => {
                let clasString = "px-4 py-2 cursor-pointer hover:bg-[#fffbf8] hover:shadow-md relative" + (activeItem === elem.name ? ' text-[#FE5F1E] bg-[#fff0e6]' : '');

                return <li key={elem.name}
                  className={clasString}
                  onClick={() => selectItem(elem)}>
                  {elem.name}
                </li>
              })
            }

          </ul>
        </div>
      }

    </div>
  )
})

export default SortPopup;
