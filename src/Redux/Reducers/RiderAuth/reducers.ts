import {TAuth} from '../types';
import {USER_LOGIN, USER_LOGOUT} from './actions';

const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
};
const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducers;
