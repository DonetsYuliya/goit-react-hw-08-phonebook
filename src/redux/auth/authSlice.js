import { createSlice } from '@reduxjs/toolkit';
import { userAuth, userLogin, userCurrent, userLogout } from './authOperations';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

const userAuthSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(userAuth.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userAuth.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.user.password = payload.user.password;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(userAuth.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(userLogin.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLogin = true;
        state.token = payload.token;
        state.user.email = payload.user.email;
        state.user.password = payload.user.password;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(userCurrent.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userCurrent.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLogin = true;
        state.token = payload.token;
        state.user.email = payload.user.email;
        state.user.password = payload.user.password;
      })
      .addCase(userCurrent.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.token = '';
      })
      .addCase(userLogout.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userLogout.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.name = '';
        state.user.email = '';
        state.user.password = '';
        state.token = '';
        state.isLogin = false;
      })
      .addCase(userLogout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const authReducer = userAuthSlice.reducer;
