import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// import {
//   clearAuthHeader,
//   setAuthHeader,
//   publicApi,
//   privateApi,
// } from 'http/http';

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
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  // try {
  return 0;

  // await privateApi.post('/users/logout');
  // // After a successful logout, remove the token from the HTTP header
  // clearAuthHeader();
  // } catch (error) {
  //   return thunkAPI.rejectWithValue(error.message);
  // }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // // Reading the token from the state via getState()
    // const state = thunkAPI.getState();
    // const persistedToken = state.auth.token;

    // if (persistedToken === null) {
    //   // If there is no token, exit without performing any request
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }

    // try {
    return 0;

    // // If there is a token, add it to the HTTP header and perform the request
    // setAuthHeader(persistedToken);
    // const res = await privateApi.get('/users/current');
    // return res.data;
    // } catch (error) {
    //   return thunkAPI.rejectWithValue(error.message);
    // }
  }
);
