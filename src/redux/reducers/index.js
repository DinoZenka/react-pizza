import { combineReducers } from 'redux';

import pizzas from './pizzas';
import filters from './filters'
import basket from './basket'


const combReducers = combineReducers(
  {
    pizzas,
    filters,
    basket
  }
)

export default combReducers;