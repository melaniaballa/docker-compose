import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers/reducerUser';

const configureStore = () => createStore(
  reducer,
  applyMiddleware(
      thunkMiddleware
  )
);

export default configureStore;
