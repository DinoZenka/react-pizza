import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import React, { useEffect, useRef, useState } from 'react';
import '../css/components/sortPopup.scss';

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
    <div ref={sertRef} className='sort-popup'>
      <span >
        {visiblePopup ? <FaCaretDown /> : <FaCaretUp />}
      </span>
      <p >Сортировка по:</p>
      <span className="active-item" onClick={() => { setVisible(!visiblePopup) }}>{activeItem}</span>
      {visiblePopup &&
        <div className="items-container">
          <ul>
            {
              props.availableItems.map((elem, index) => {
                const clasString = (activeItem === elem.name ? 'active' : '');

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
