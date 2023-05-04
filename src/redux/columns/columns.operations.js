import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { selectIsLoggedIn } from 'redux/auth/auth.selectors';

import { setAuthHeader, privateApi } from 'services/http';

axios.defaults.baseURL = 'https://goose-track-backend-8txo.onrender.com';

export const fetchColumns = createAsyncThunk(
  'columns/fetchAll',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch columns');
    }
    try {
      setAuthHeader(persistedToken);
      const { data } = await privateApi.get('/api/columns');
      return data.data.result;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addColumn = createAsyncThunk(
  'columns/addColumn',
  async (currentColumn, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch columns');
    }
    try {
      const { id, title, number } = currentColumn;

      setAuthHeader(persistedToken);

      const { data } = await privateApi.post('/api/columns', {
        id,
        title,
        number,
      });

      return data.data.result;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'columns/deleteColumn',
  async (id, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue('Unable to delete column');
    }
    try {
      setAuthHeader(persistedToken);

      const { data } = await privateApi.delete(`/api/columns/${id}`);

      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
