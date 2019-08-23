import { combineReducers } from 'redux';
import common from './reducers/common';
import subs from './reducers/subs';
import auth from './reducers/auth';

export default combineReducers({
  common,
  subs,
  auth
});