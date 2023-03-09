import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter: {
      reducer(state, { payload }) {
        return (state = payload);
      },
      prepare(value) {
        return {
          payload: value,
        };
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
