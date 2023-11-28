import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  TOTALBILL,
  UPDATE_IN_CART,
} from './action';

const initialState = {
  cart: [],
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cart: Array.isArray(state.cart)
          ? [...state.cart, action.payload]
          : [action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        cart: state.cart.filter((_, index) => index !== action.payload),
      };
    case UPDATE_IN_CART:
      return {
        cart: state.cart.map((item, index) => {
          if (action.payload.index === index) {
            return action.payload.item;
          } else {
            return item;
          }
        }),
      };
    default:
      return state;
  }
}

export default cartReducer;
