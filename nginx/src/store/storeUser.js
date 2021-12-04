import { createStore } from "redux";
import reducer from "../reducers/reducerUser";

function configureStore(state = { username: '' }) {
  return createStore(reducer, state);
}

export default configureStore;