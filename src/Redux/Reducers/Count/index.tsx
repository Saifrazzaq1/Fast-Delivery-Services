
import {  DECREMENT_COUNT, INCREMENT_COUNT } from '../Auth/actions';

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
      case DECREMENT_COUNT:
        return {
          ...state,
          count: state.count > 0 ? state.count - 1 : 0,
        };
    default:
      return state;
  }
};

export default countReducer;
