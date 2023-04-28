import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask, editTask } from './tasks.operations';

const handlePending = state => {
  state.isTasksLoading = true;
};

const handleRejected = (state, { error }) => {
  state.isTasksLoading = false;
  state.error = error;
};

const handleFulfiled = state => {
  state.isTasksLoading = false;
  state.error = null;
};

export const tasksInitState = {
  tasks: [],
  periods: [],
  isTasksLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitState,
  reducers: {
    addSearchPeriods(state, { payload }) {
      state.periods.push(payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(fetchTasks.fulfilled, (state, { payload }) => {
        handleFulfiled(state);
        state.tasks = [...state.tasks, ...payload];
      })
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.rejected, handleRejected)
      .addCase(addTask.fulfilled, (state, { payload }) => {
        handleFulfiled(state);
        state.items.push(payload);
      })
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        handleFulfiled(state);
        state.tasks = state.tasks.filter(task => task.id !== payload);
      })
      .addCase(editTask.pending, handlePending)
      .addCase(editTask.rejected, handleRejected)
      .addCase(editTask.fulfilled, (state, { payload }) => {
        handleFulfiled(state);
        state.tasks = state.tasks.map(task => {
          if (task.id === payload.id) {
            task.name = payload.name;
            task.number = payload.number;
            //
            // Додати і інші поля для редагування таски
            //
            //
            //
          }
          return task;
        });
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
