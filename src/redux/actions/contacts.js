import Types from '../constants/contacts';
import apiRequest from '../../api/apiRequest';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// actions
export const getContacts = (data) => async (dispatch) => {
  const result = await apiRequest({
    url: 'contacts',
    method: 'GET',
  })
    .then((res) => res.data.data)
    .catch((err) => err);

  dispatch({type: Types.SET_CONTACTS, payload: result});
};

export const addContact = (data) => async (dispatch) => {
  const result = await apiRequest({
    url: 'contacts',
    data: data,
    method: 'POST',
  })
    .then((res) => res.data.data)
    .catch((err) => err);
  dispatch({type: Types.ADD_CONTACT, payload: result});
};

export const deleteContact = (id) => async (dispatch) => {
  const result = await apiRequest({
    url: `contacts/${id}`,
    method: 'DELETE',
  })
    .then((res) => res.data)
    .catch((err) => err);
  if (result.status == 200) dispatch({type: Types.DELETE_CONTACT, payload: id});
};
