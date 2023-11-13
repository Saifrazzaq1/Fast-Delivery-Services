import {combineReducers} from 'redux';
import auth from './Reducers/Auth/reducers';
import cart from './Reducers/Cart/reducer';
import ItemCount from './Reducers/ItemCount/reducer';

const reducers = combineReducers({
  auth,
  cart,
  ItemCount,
});
export default reducers;
