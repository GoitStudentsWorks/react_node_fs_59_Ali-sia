import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateApi } from 'services/http';

// GET @ /contacts
export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (params, thunkAPI) => {
    try {
      const { data } = await privateApi.get('/api/tasks', {
        params: params.period,
        signal: params.signal,
      });
      return data.data;
    } catch (error) {
      console.log('ERROORR', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST @ /tasks
export const addTask = createAsyncThunk(
  'tasks/addTasks',
  async (task, thunkAPI) => {
    try {
      const { data } = await privateApi.post('/api/tasks', task);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// DELETE @ /tasks/:id
export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, thunkAPI) => {
    try {
      const { data } = await privateApi.delete(`/api/tasks/${id}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// PATCH @ /tasks/:id
export const editTask = createAsyncThunk(
  'tasks/editTask',
  async (data, thunkAPI) => {
    const { id, name, number } = data;
    try {
      const { data } = await privateApi.patch(`/api/tasks/${id}`, {
        name,
        number,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
