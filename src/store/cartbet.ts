import { createSlice } from '@reduxjs/toolkit';

interface CartSaveObject {
  id: number;
  bet: [];
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
    fillSave(state: any, action: any) {
      console.log(state.recentGames);
      state.recentGames.concat(action.payload);
      console.log(state.recentGames);
    },
    filterRecentGames(state, action) {
      state.recentGames = action.payload;
    },
  },
});

export const cartSaveActions = cartSaveSlice.actions;
export default cartSaveSlice.reducer;
