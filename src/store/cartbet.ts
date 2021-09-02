import { createSlice } from '@reduxjs/toolkit';

interface CartSaveObject {
  id: number;
  bet: number;
  game: string;
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
  name: 'cart',
  initialState: initialCartSaveState,
  reducers: {
    fillSave(state: CartSaveState, action: any) {
      state.recentGames = action.payload;
    },
  },
});

export const cartSaveActions = cartSaveSlice.actions;
export default cartSaveSlice.reducer;
