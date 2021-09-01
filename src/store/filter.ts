import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    helperFilter(state: FilterState, action: PayloadAction<FilterObject[]>) {
      console.log(state.helperFilter);
      state.helperFilter = action.payload;
      console.log(state.helperFilter);
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;
