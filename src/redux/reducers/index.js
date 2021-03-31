import {combineReducers} from 'redux';
import Auth from './auth';
import Contact from './contacts';
var reducers = combineReducers({
  auth: Auth,
  contact: Contact,
});

export default rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return reducers(state, action);
};
