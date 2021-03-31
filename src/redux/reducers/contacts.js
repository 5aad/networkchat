import Types from '../constants/contacts';
import _ from 'lodash';

var defaultState = {
  contacts: [],
};

var authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Types.SET_CONTACTS: {
      let newState = Object.assign({}, state);
      newState.contacts = action.payload;
      return newState;
    }

    case Types.ADD_CONTACT: {
      let newState = Object.assign({}, state);
      newState.contacts = [action.payload, ...newState.contacts];
      return newState;
    }
    case Types.DELETE_CONTACT: {
      let newState = Object.assign({}, state);
      newState.contacts = contacts.filter((item) => item.id !== action.payload);
      return newState;
    }

    default:
      return state;
  }
};
export default authReducer;
