import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../Auth/actions';

const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      const addedItem = action.payload;
      const itemAlreadyInFavorites = state.favorites.find((item:any) => item.id === addedItem.id);

      if (!itemAlreadyInFavorites) {
        return {
          ...state,
          favorites: [...state.favorites, addedItem],
        };
      }
      return state; // Return the current state if the item is already in favorites.

    case REMOVE_FROM_FAVORITES:
      const removedItem = action.payload;
      if (removedItem.id) {
        return {
          ...state,
          favorites: state.favorites.filter((item:any) => item.id !== removedItem.id),
        };
      }
      return state; // Return the current state if no valid item is provided for removal.

    default:
      return state;
  }
};

export default favoritesReducer;
