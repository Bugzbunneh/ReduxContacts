/* eslint-disable default-case */
import { createStore, combineReducers } from 'redux';

const initialContactsState = {
  contacts: [],
  loading: false,
};

export const GETTINGCONTACTS = 'GettingContacts';
export const gettingContactsAction = () => ({ type: GETTINGCONTACTS });

export const GOTCONTACTS = 'GotContacts';
export const gotContactsAction = (contacts) => ({
  type: GOTCONTACTS,
  contacts: contacts,
});

export const ADDCONTACT = 'AddContact';
export const addContactAction = (contact) => ({
  type: ADDCONTACT,
  contact: contact,
});

const contactsReducer = (state = initialContactsState, action) => {
  switch (action.type) {
    case GETTINGCONTACTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case GOTCONTACTS: {
      return {
        ...state,
        loading: false,
        contacts: action.contacts,
      };
    }
    case ADDCONTACT: {
      buildName(action.contact);
      state.contacts.push(action.contact);
      return {
        ...state,
      };
    }
  }
  return state;
};

const buildName = (contact) => {
  contact.name = `${contact.firstName} ${contact.lastName}`;
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export const configureStore = () => {
  const store = createStore(rootReducer, undefined);
  return store;
};
