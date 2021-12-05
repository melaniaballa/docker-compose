import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducers/reducerUser';

const loggerMiddleware = createLogger();
const configureStore = () => createStore(
  reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

export default configureStore;