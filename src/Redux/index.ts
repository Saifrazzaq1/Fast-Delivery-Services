import { combineReducers } from 'redux';
import auth from './Reducers/Auth/reducers';
import countReducer from './Reducers/Count';
import cartReducer from './Reducers/Cart/Cartreducers';
import favoritesReducer from './Reducers/Favorite';


const reducers = combineReducers({
  auth,
  cart: cartReducer,
  countReducer,
  favorites: favoritesReducer,
});
export default reducers;
