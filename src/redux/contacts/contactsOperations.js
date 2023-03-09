import { createAsyncThunk } from '@reduxjs/toolkit';

import { getContacts, toAddContact, toDeleteContact } from 'services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const result = await toAddContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await toDeleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
