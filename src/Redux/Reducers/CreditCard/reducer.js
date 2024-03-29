
import { ADD_CARD } from "./action";

const initialState = {
    cards: [],
  };
  
  const card = (state = initialState, action) => {
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
  
  export default card;
  