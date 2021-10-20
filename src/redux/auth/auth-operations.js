import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const ACCOUNT_BASE_URL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  `${ACCOUNT_BASE_URL}auth/register`,
  async credentials => {
    try {
      const { data } = await axios.post(
        `${ACCOUNT_BASE_URL}/users/signup`,
        credentials,
      );
      token.set(data.token);
      return data;
    } catch (error) {}
  },
);

const logIn = createAsyncThunk(
  `${ACCOUNT_BASE_URL}auth/login`,
  async credentials => {
    try {
      const { data } = await axios.post(
        `${ACCOUNT_BASE_URL}/users/login`,
        credentials,
      );
      token.set(data.token);
      return data;
    } catch (error) {}
  },
);

const logOut = createAsyncThunk(`${ACCOUNT_BASE_URL}auth/logout`, async () => {
  try {
    await axios.post(`${ACCOUNT_BASE_URL}/users/logout`);
    token.unset();
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk(
  `${ACCOUNT_BASE_URL}auth/refresh`,
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get(`${ACCOUNT_BASE_URL}/users/current`);
      return data;
    } catch (error) {}
  },
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
