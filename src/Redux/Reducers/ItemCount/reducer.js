import {INCREMENT, DECREMENT} from '../Auth/actions';
const initialState = {
  count: 0,
};
const ItemCount = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : 0,
      };
    default:
      return state;
  }
};
export default ItemCount;
