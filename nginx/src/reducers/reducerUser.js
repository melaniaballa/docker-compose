import { userConstants } from '../constants/auth';

const initialState = {
  username: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN:
      return {
        username: action.username
      }
    default:
      return state
  }
}

export default reducer;
