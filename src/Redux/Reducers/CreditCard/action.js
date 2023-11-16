
export const ADD_CARD = 'ADD_CARD';

export const addCard = (cardInfo) => {
  return {
    type: 'ADD_CARD',
    payload: cardInfo,
  };
};
   
  