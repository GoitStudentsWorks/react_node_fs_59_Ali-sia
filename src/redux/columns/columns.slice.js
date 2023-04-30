import { fetchColumns, addColumn, deleteColumn } from './columns.operations';

const { createSlice } = require('@reduxjs/toolkit');
const { columnsInitState } = require('./columns.init-state');

const columnSlice = createSlice({
  name: 'columns',
  initialState: columnsInitState,
  reducers: {
    filterInputAction: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchColumns.pending, state => {
        state.columns.isLoading = true;
      })
      .addCase(fetchColumns.fulfilled, (state, { payload }) => {
        state.columns.categories = payload;
        state.columns.isLoading = false;
        state.columns.error = null;
      })
      .addCase(fetchColumns.rejected, (state, { payload }) => {
        state.columns.isLoading = false;
        state.columns.error = payload;
      })
      .addCase(addColumn.pending, state => {
        state.columns.isLoading = true;
      })
      .addCase(addColumn.fulfilled, (state, { payload }) => {
        state.columns.categories.push(payload);
        state.columns.isLoading = false;
        state.columns.error = null;
      })
      .addCase(addColumn.rejected, (state, { payload }) => {
        state.columns.isLoading = false;
        state.columns.error = payload;
      })
      .addCase(deleteColumn.pending, state => {
        state.columns.isLoading = true;
      })
      .addCase(deleteColumn.fulfilled, (state, { payload }) => {
        const idx = state.columns.categories.findIndex(
          item => item.id === payload.id
        );
        state.columns.categories.splice(idx, 1);
        state.columns.isLoading = false;
        state.columns.error = null;
      })
      .addCase(deleteColumn.rejected, (state, { payload }) => {
        state.columns.isLoading = false;
        state.columns.error = payload;
      });
  },
});

// export const { filterInputAction } = contactsSlice.actions;
export const columnsReducer = columnSlice.reducer;
