import React from 'react';
import PropTypes from 'prop-types';
import '../css/components/categories.scss';

const Categories = React.memo(({ categoryIndex, categories, setActiveCategory }) => {

  return (
    <div className='categories '>
      <ul >
        <li className={categoryIndex == null ? 'active' : ''} onClick={() => setActiveCategory(null)}>Все</li>
        {categories.map((elem, ind) => (
          <li
            className={categoryIndex === ind ? 'active' : ''}
            onClick={() => setActiveCategory(ind)}
            key={`${elem}_${ind}`}

          >
            {elem}
          </li>
        ))}

      </ul>
    </div>
  )
})

Categories.propTypes = {
  categoryIndex: PropTypes.number,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  setActiveCategory: PropTypes.func
}

Categories.defaultProps = {
  categoryIndex: null,
  categories: []
}


export default Categories;