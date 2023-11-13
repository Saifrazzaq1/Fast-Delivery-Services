import {getRedux} from 'src/Redux/function';

export const ADD_TO_CART = 'ADD_TO_CART';

export const ADD_ITEM_TO_CART = (item, quantity) => {
  const {dispatch} = getRedux();
  dispatch({
    type: ADD_TO_CART,
    payload: {item, quantity},
  });
};
