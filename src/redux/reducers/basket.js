const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
}

export const ADD_PIZZA_TO_BASKET = 'ADD_PIZZA_TO_BASKET';
export const CLEAR_BASKET = 'CLEAR_BASKET';
export const REMOVE_BASKET_ITEM = 'REMOVE_BASKET_ITEM';

const countTotalPrice = array => array.reduce((total, curr) => curr.price + total, 0);

const basket = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_TO_BASKET:
      const items = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newObj = {
        ...state.items,
        [action.payload.id]: {
          items: items,
          totalPrice: countTotalPrice(items)
        }
      };
      const array = [].concat.apply([], Object.values(newObj).map(pizzas => pizzas.items));
      return {
        ...state,
        items: newObj,
        totalCount: array.length,
        totalPrice: countTotalPrice(array)
      }

    case CLEAR_BASKET:
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0
      }
    case REMOVE_BASKET_ITEM:
      const newItems = {
        ...state.items
      }
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems
      }
    default:
      return state;
  }
}

export default basket;