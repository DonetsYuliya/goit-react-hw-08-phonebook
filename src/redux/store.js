import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filters/filterSlice';
import { authReducer } from './auth/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
