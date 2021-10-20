// import axios from 'axios';
// import {
//   registersSuccess,
//   registerFailure,
//   loginSuccess,
//   loginFailure,
//   logoutSuccess,
// } from './loginSlice';

//  const ACCOUNT_BASE_URL = 'https://connections-api.herokuapp.com';

//  function register(user) {
//   return function (dispatch) {
//     dispatch({ type: 'REGISTER_REQUEST' });
//     return axios
//       .post(`${ACCOUNT_BASE_URL}/users/signup`, { ...user })
//       .then(function (response) {
//         const {
//           user: { name, email },
//           token,
//         } = response.data;
//         dispatch(registersSuccess({ name, email, token }));
//       })
//       .catch(function (error) {
//         dispatch(registerFailure({ error: error.toString() }));
//       });
//   };
// }

// export function login(contact) {
//   return function (dispatch) {
//     dispatch({ type: 'LOGIN_REQUEST' });

//     return axios
//       .post(`${ACCOUNT_BASE_URL}/users/login`, contact)
//       .then(function (response) {
//         dispatch(loginSuccess(response.data));
//       })
//       .catch(function (error) {
//         dispatch(loginFailure({ error: error.toString() }));
//       });
//   };
// }

// export function logout(token) {
//   return function (dispatch) {
//     dispatch({ type: 'LOGOUT_REQUEST' });
//     return axios
//       .post(`${ACCOUNT_BASE_URL}/users/logout`, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then(function () {
//         dispatch(logoutSuccess());
//       })
//       .catch(function (error) {
//         dispatch({
//           type: 'LOGOUT_FAILURE',
//           payload: { error: error.toString() },
//         });
//       });
//   };
// }
