import { createSlice } from '@reduxjs/toolkit';

interface FilterObject {
  id: number;
  bet: [];
  game: string;
  price: number;
  color: string;
  date: string;
}

interface FilterState {
  helperFilter: FilterObject[];
}

const initialFilter: FilterState = {
  helperFilter: [],
};
const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    helperFilter(state: any, action: any) {
      state.helperFilter = action.payload;
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;
