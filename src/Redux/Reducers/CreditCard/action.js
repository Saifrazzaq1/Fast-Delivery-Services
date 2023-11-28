import {getRedux} from 'src/Redux/function';

export const ADD_CARD = 'ADD_CARD';

export const ADD_Credit_Card = cardInfo => {
  const {dispatch} = getRedux();
  dispatch({
    type: ADD_CARD,
    payload: cardInfo,
  });
};
