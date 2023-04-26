import { createAction, createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  updateUser,
} from './auth.operations';
import THEME_CONTEXT from 'context/ThemeContext';

const initialState = {
  user: {
    name: null,
    birthday: null,
    email: null,
    phone: null,
    telegram: null,
    avatarURL: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  theme: localStorage.getItem('theme')
    ? localStorage.getItem('theme')
    : THEME_CONTEXT.LIGHT,
};

export const toggleTheme = createAction('toggleTheme');

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state, { payload }) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
      })
      .addCase(toggleTheme, (state, action) => {
        state.theme =
          state.theme === THEME_CONTEXT.LIGHT
            ? THEME_CONTEXT.DARK
            : THEME_CONTEXT.LIGHT;
        localStorage.setItem('theme', state.theme);
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        console.log('payload', payload);
        state.user = payload;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
