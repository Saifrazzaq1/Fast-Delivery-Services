import {getRedux} from 'src/Redux/function';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_IN_CART = 'UPDATE_IN_CART';

// DATA = {item: obj, count: number, addOns: optional array of {name: string, price: number}}

export const ADD_ITEM_TO_CART = (data, cb = () => {}) => {
  const {dispatch} = getRedux();
  dispatch({
    type: ADD_TO_CART,
    payload: data,
  });
  cb();
};

export const REMOVE_ITEM_FROM_CART = (index, cb = () => {}) => {
  const {dispatch} = getRedux();
  dispatch({
    type: REMOVE_FROM_CART,
    payload: index,
  });
  cb();
};

export const UPDATE_ITEM_ON_INDEX = ({item, index}, cb = () => {}) => {
  const {dispatch} = getRedux();
  dispatch({
    type: UPDATE_IN_CART,
    payload: {index, item},
  });
  cb();
};
