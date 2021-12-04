import { Types } from '../constants/auth';

const initialState = {
  username: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN:
    console.log('login', action.payload.username)
      return {
        ...state,
        username: action.payload.username,
      }
    default:
      return state;
  }
}

export default reducer;