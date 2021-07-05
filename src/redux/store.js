import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combReducers from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combReducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;