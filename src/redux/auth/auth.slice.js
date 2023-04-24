import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './auth.operations';
import { LIGHT, DARK } from 'context/ThemeContext';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  theme: localStorage.getItem("theme") ? localStorage.getItem("theme") : LIGHT,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducer: {
    toggleTheme(state, _) {
      const theme = state.theme === LIGHT ? DARK : LIGHT;
      localStorage.setItem("theme", theme);
      return {
        ...state,
        theme,
      };
    },
  },
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
      });
  },
});

export const authReducer = authSlice.reducer;
export const { toggleTheme } = authSlice.actions;