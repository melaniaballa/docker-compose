import { userConstants } from '../constants/auth';

const initialState = {
  username: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN:
      console.log('====Mela: login Reducer: ', action.username);
      return {
        username: action.username
      }
    default:
      console.log('====Mela: login DefaultReducer: ');
      return state
  }
}

export default reducer;
