import {combineReducers} from 'redux';
import auth from './Reducers/Auth/reducers';
import cart from './Reducers/Cart/reducer';
import card from './Reducers/CreditCard/reducer';

const reducers = combineReducers({
  auth,
  cart,
  card,
});
export default reducers;
