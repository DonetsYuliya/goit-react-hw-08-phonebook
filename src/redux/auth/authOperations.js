import { createAsyncThunk } from '@reduxjs/toolkit';
import { signup, login, getCurrent, logout } from 'services/userAuthApi';

export const userAuth = createAsyncThunk(
  'auth/userAuth',
  async (data, { rejectWithValue }) => {
    try {
      const result = await signup(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const userLogin = createAsyncThunk(
  'auth/userLogin',
  async (data, { rejectWithValue }) => {
    try {
      const result = await login(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const userCurrent = createAsyncThunk(
  'auth/userCurrent',
  async (data, { rejectWithValue }) => {
    try {
      const result = await getCurrent(data);
      console.log(result);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const userLogout = createAsyncThunk(
  'auth/userLogout',
  async (data, { rejectWithValue }) => {
    try {
      await logout(data);
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
