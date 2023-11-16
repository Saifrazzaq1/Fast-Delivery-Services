// cardReducer.js

import { ADD_CARD } from "./action";

const initialState = {
    cards: [],
  };
  
  const cardReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_CARD:
        return {
          ...state,
          cards: [...state.cards, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default cardReducer;
  