import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// clearAuthHeader,
// publicApi,

import { setAuthHeader, privateApi } from 'services/http';

axios.defaults.baseURL = 'https://goose-track-backend-8txo.onrender.com';

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */

export const register = createAsyncThunk(
  'users/register',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/users/register', formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */

export const logIn = createAsyncThunk(
  'users/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/users/login', credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */

export const logOut = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/users/logout');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const { data } = await privateApi.get('api/users/current');
      return data.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * PATCH @ /users/info
 * body: { name, birthday, email, phone, telegram, avatarURL }
 */

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await privateApi.patch('/api/users/info', credentials);
      return data.data.user;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
