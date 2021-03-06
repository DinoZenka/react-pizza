import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, PizzaItem, PizzaLoader, SortPopup } from '../components';
import { addPizzaToBasket } from '../redux/actions/basket';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import '../css/pages/home.scss';

const categories = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые'
]

const filters = [
  { name: 'популярности', type: 'rating' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'name' }
]

function Home() {
  const dispatch = useDispatch();

  const { items, isLoaded } = useSelector(({ pizzas }) => ({
    isLoaded: pizzas.isLoaded,
    items: pizzas.items
  }));

  const { category, sortBy } = useSelector(({ filters }) => filters);
  const { addedItems } = useSelector(({ basket }) => ({ addedItems: basket.items }));

  // console.log(addedItems)
  const onSelectCategory = React.useCallback(index => dispatch(setCategory(index)), []);

  const onSelectSort = (type) => {
    dispatch(setSortBy(type));
  }

  const onAddPizza = (obj) => {
    dispatch(addPizzaToBasket(obj));
  }

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  return (
    <>
      <div className='category-filter-container'>
        <Categories
          categoryIndex={category}
          setActiveCategory={onSelectCategory}
          categories={categories} />

        <SortPopup
          activeType={sortBy}
          availableItems={filters}
          setSortBy={onSelectSort} />
      </div>
      <h2 className="all-pizzas-text">Все пиццы</h2>
      <div className='pizzas-container'>
        {
          isLoaded
            ? items.map(elem => (<PizzaItem key={elem.id} {...elem} onAddPizza={onAddPizza} count={addedItems[elem.id] ? addedItems[elem.id].items.length : ''} />))
            : Array(10).fill(0).map((_, index) => <PizzaLoader key={index} />)
        }
      </div>
    </>
  )
}

export default Home
