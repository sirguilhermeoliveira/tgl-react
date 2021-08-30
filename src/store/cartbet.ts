import { createSlice } from '@reduxjs/toolkit';

interface CartSaveObject {
  id: number;
  gameAdded: string;
  numbers: String[];
  price: number;
  color: string;
  date: string;
}

interface CartSaveState {
  recentGames: CartSaveObject[];
}

const initialCartSaveState: CartSaveState = {
  recentGames: [],
};

const cartSaveSlice = createSlice({
  name: 'cartInfo',
  initialState: initialCartSaveState,
  reducers: {
    fillSave(state, action) {
      //  state.recentGames.push(action.payload);
      state.recentGames = action.payload;
    },
  },
});

export const cartSaveActions = cartSaveSlice.actions;
export default cartSaveSlice.reducer;
