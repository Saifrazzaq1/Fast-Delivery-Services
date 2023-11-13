import { ADD_TO_CART, REMOVE_FROM_CART, SET_FINAL_PRICE } from '../Auth/actions';

const initialState = {
  cartItems: [],
  finalPrice: 0,
  selectedItemData: null,
};

const cartReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedItem = action.payload;
      const itemAlreadyInCart = state.cartItems.find((item:any) => item.id === addedItem.id);

      if (!itemAlreadyInCart) {
        return {
          ...state,
          cartItems: [...state.cartItems, addedItem],
          finalPrice: state.finalPrice + parseFloat(addedItem.price),
        };
      }

      return state;

    case REMOVE_FROM_CART:
      const removedItem = action.payload;
      if (removedItem.id) {
        return {
          ...state,
          cartItems: state.cartItems.filter((item:any) => item.id !== removedItem.id),
          finalPrice: state.finalPrice - parseFloat(removedItem.price),
        };
      }
      return state;

    case SET_FINAL_PRICE:
      return {
        ...state,
        finalPrice: action.payload,
      };
      case 'SET_SELECTED_ITEM_DATA':
        return {
          ...state,
          selectedItemData: action.payload,
        };
  
      default:
        return state;
    }

 
};

export default cartReducer;
