import axios from 'axios';

import { SET_LOADED, SET_PIZZAS } from "../reducers/pizzas";

export const fetchPizzas = (category, sortBy) => dispatch => {
  dispatch(setLoaded(false));
  const query = `/pizzas?` +
    (category !== null ? `category=${category}&` : '') +
    `_sort=${sortBy}&_order=asc`;

  axios.get(query).then(res => {
    console.log(res.data)
    dispatch(setPizzas(res.data));
  })
}

export const setLoaded = val => ({
  type: SET_LOADED,
  payloaad: val
})

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items
})