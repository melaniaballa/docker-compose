import { userConstants } from '../constants/auth';

const initialState = {
  username: ''
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN:
      console.log('====Mela: login Reducer: ', action.payload.username);
      return {
        username: action.payload.username
      }
    default:
      console.log('====Mela: login DefaultReducer: ');
      return state
  }
}

export default reducer;
