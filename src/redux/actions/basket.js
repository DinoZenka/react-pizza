import { ADD_PIZZA_TO_BASKET, CLEAR_BASKET, MINUS_PIZZA, PLUS_PIZZA, REMOVE_BASKET_ITEM } from "../reducers/basket";

export const addPizzaToBasket = (pizzaObj) => ({
  type: ADD_PIZZA_TO_BASKET,
  payload: pizzaObj
})

export const clearBasket = () => ({
  type: CLEAR_BASKET
})

export const removePizzaLine = (id) => ({
  type: REMOVE_BASKET_ITEM,
  payload: id
})

export const minusPizza = (id) => ({
  type: MINUS_PIZZA,
  payload: id
})

export const plusPizza = (id) => ({
  type: PLUS_PIZZA,
  payload: id
})
