import Types from '../constants/auth';
import apiRequest from '../../api/apiRequest';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// actions
export const setUser = (data) => async (dispatch) => {
  if (data.token) AsyncStorage.setItem('@auth_token', data.token);
  dispatch({type: Types.SET_USER, payload: data.user});
};

export const registerPhone = async (phone) => {
  return await apiRequest({
    url: 'users/register-phone',
    data: {phone},
    method: 'POST',
  })
    .then((res) => res.data)
    .catch((err) => err);
};

export const meUser = async (phone) => {
  return await apiRequest({
    url: 'users/me',
    method: 'GET',
  })
    .then((res) => res.data)
    .catch((err) => err);
};

export const verifyPhone = async (phone, verificationCode) => {
  return await apiRequest({
    url: 'users/verify-phone',
    data: {phone, verificationCode},
    method: 'POST',
  })
    .then((res) => res.data)
    .catch((err) => err);
};

export const registerUser = async (data) => {
  return await apiRequest({
    url: 'users/register',
    data: data,
    method: 'POST',
  })
    .then((res) => res.data)
    .catch((err) => err);
};


export const getInitials = function (string) {
  var names = string.split(' '),
    initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};