import axios from 'axios';
import {
  getContactsSuccess,
  getContactsFailure,
  addContactSuccess,
  deleteContactSuccess,
  addContactFailure,
} from './contactsSlice';

export const BASE_URL = 'http://localhost:4040';
export const ACCOUNT_BASE_URL="https://connections-api.herokuapp.com";

export function getContacts() {
  return function (dispatch) {
    dispatch({ type: 'GET_CONTACTS_REQUEST' });
    return axios
      .get(`${ACCOUNT_BASE_URL}/contacts`)
      .then(function (response) {
        dispatch(getContactsSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(getContactsFailure({ error: error.toString() }));
      });
  };
}

export function addContact(contact) {
  return function (dispatch) {
    return axios
      .post(`${ACCOUNT_BASE_URL}/contacts`, contact)
      .then(function (response) {
        dispatch(addContactSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(addContactFailure({ error: error.toString() }));
      });
  };
}

export function deleteContact(id) {
  return function (dispatch) {
    dispatch({ type: 'DELETE_CONTACT_REQUEST' });
    return axios
      .delete(`${ACCOUNT_BASE_URL}/contacts/${id}`)
      .then(function () {
        dispatch(deleteContactSuccess(id));
      })
      .catch(function (error) {
        dispatch({
          type: 'DELETE_CONTACT_FAILURE',
          payload: { error: error.toString() },
        });
      });
  };
}
