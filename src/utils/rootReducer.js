import { combineReducers } from 'redux';
import auth from '../store/reducers/auth';
import cart from '../store/reducers/cart';

export default combineReducers({
  auth,
  cart,
});
