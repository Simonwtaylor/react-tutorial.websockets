import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import wsMiddleware from '../middleware/middleware';
import rootReducer from './root-reducer';

const middleware = [reduxThunk, wsMiddleware];

const wdw: any = window;

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    wdw.__REDUX_DEVTOOLS_EXTENSION__ && wdw.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);


export default store;