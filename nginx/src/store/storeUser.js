import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducerUser';

const rootReducer = combineReducers({ reducer });

const configureStore = () => createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default configureStore;
