import {ADD_TO_CART} from './action';
const initialState = {
  cart: [],
};
export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(action.payload);
      return {
        ...state,
        name: action.name,
        price: action.price,
      };
    default:
      return state;
  }
}
export default cartReducer;
