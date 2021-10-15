import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import { analyticsLoggerMiddleware } from '../middlewares/analytics-logger';
import { applyMiddleware } from 'redux';
import actionLogger from 'redux-logger';
import thunk from 'redux-thunk';

const enhancer = applyMiddleware(
  thunk,
  // analyticsLoggerMiddleware,
  // actionLogger,
);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  enhancers: [enhancer],
});
