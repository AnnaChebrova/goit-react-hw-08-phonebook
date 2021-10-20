// import { createSlice } from '@reduxjs/toolkit';

// const INITIAL_STATE = {
//   name: '',
//   email: '',
//   token: '',
//   error: '',
// };

// const loginSlice = createSlice({
//   name: 'user',
//   initialState: INITIAL_STATE,
//   reducers: {
//     registersSuccess: (state, action) => {
//       state.name = action.payload.name;
//       state.email = action.payload.email;
//       state.token = action.payload.token;
//     },
//     registerFailure: (state, action) => {
//       state.error = action.payload.error;
//     },
//     loginSuccess: (state, action) => {
//       state.name = action.payload.name;
//       state.email = action.payload.email;
//       state.token = action.payload.token;
//     },
//     loginFailure: (state, action) => {
//       state.error = action.payload.error;
//     },
//     logoutSuccess: state => {
//       state.name = '';
//       state.email = '';
//       state.token = '';
//     },
//   },
// });

// export const {
//   registersSuccess,
//   registerFailure,
//   loginSuccess,
//   loginFailure,
//   logoutSuccess,
// } = loginSlice.actions;

// export default loginSlice.reducer;
