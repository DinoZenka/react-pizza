const initialState = {
  items: [],
  isLoaded: false
}

export const SET_PIZZAS = 'SET_PIZZAS';
export const SET_LOADED = 'SET_LOADED';

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZAS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      }
    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload
      }
    default:
      return state;
  }
}

export default pizzas;