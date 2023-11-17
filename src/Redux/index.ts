import {combineReducers} from 'redux';
import auth from './Reducers/Auth/reducers';
import cart from './Reducers/Cart/reducer';
import ItemCount from './Reducers/ItemCount/reducer';
import card from './Reducers/CreditCard/reducer';

const reducers = combineReducers({
  auth,
  cart,
  ItemCount,
  card,
});
export default reducers;
