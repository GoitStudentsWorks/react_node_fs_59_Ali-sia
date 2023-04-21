import { createAsyncThunk } from '@reduxjs/toolkit';
// import { privateApi } from 'http/http';

// GET @ /contacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    // try {
    return 0;
    // const response = await privateApi.get('/contacts');
    // return response.data;
    // } catch (e) {
    //   return thunkAPI.rejectWithValue(e.message);
    // }
  }
);

// POST @ /contacts
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    // try {
    return 0;

    // const { id, name, number } = newContact;
    // const response = await privateApi.post('/contacts', { id, name, number });
    // return response.data;
    // } catch (e) {
    //   return thunkAPI.rejectWithValue(e.message);
    // }
  }
);

// DELETE @ /contacts/:id
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    // try {
    return 0;

    // const response = await privateApi.delete(`/contacts/${contactId}`);
    // return response.data;
    // } catch (e) {
    //   return thunkAPI.rejectWithValue(e.message);
    // }
  }
);
