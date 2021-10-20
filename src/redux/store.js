import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import { analyticsLoggerMiddleware } from '../middlewares/analytics-logger';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth/auth-slice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const enhancer = applyMiddleware(thunk, analyticsLoggerMiddleware);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  enhancers: [enhancer],
});
export const persistor = persistStore(store);
