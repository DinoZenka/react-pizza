const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
}

export const ADD_PIZZA_TO_BASKET = 'ADD_PIZZA_TO_BASKET';
export const CLEAR_BASKET = 'CLEAR_BASKET';
export const REMOVE_BASKET_ITEM = 'REMOVE_BASKET_ITEM';
export const MINUS_PIZZA = 'MINUS_PIZZA';
export const PLUS_PIZZA = 'PLUS_PIZZA';


const countTotalPrice = array => array.reduce((total, curr) => curr.price + total, 0);

const basket = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_TO_BASKET: {

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
    }

    case CLEAR_BASKET:
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0
      }
    case REMOVE_BASKET_ITEM: {

      const newItems = {
        ...state.items
      }
      delete newItems[action.payload];

      const newCount = state.totalCount - state.items[action.payload].items.length;
      const newPrice = state.totalPrice - state.items[action.payload].totalPrice;

      return {
        ...state,
        items: newItems,
        totalPrice: newPrice,
        totalCount: newCount
      }
    }
    case MINUS_PIZZA: {
      if (state.items[action.payload].items.length === 1) {
        return state;
      }
      const pizza = state.items[action.payload].items.slice(-1);

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: state.items[action.payload].items.slice(0, -1),
          totalPrice: state.items[action.payload].totalPrice - pizza[0].price
        }
      }
      return {
        ...state,
        items: newItems,
        totalCount: state.totalCount - 1,
        totalPrice: state.totalPrice - pizza[0].price
      }
    }
    case PLUS_PIZZA: {
      const newPizza = state.items[action.payload].items[0];
      const pizzasItems = [
        ...state.items[action.payload].items,
        newPizza
      ];

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: pizzasItems,
          totalPrice: state.items[action.payload].totalPrice + newPizza.price
        }
      }
      return {
        ...state,
        items: newItems,
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + newPizza.price
      }
    }
    default:
      return state;
  }
}

export default basket;