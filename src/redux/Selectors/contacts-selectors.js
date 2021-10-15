import { createSelector } from 'reselect';

export const getContactsSelector = state => state.contacts.items;

export const getContactsErrorSelector = state => state.contacts.error;

export const filter = state => state.filter;

export const getQuerySelector = state => state.contacts.query;

export const getFilteredContactsSelector = createSelector(
  [getContactsSelector, getQuerySelector],
  (contacts, query) =>
    contacts.filter(item => item.name.toLowerCase().includes(query)),
);
