import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartObject {
  id: number;
  bet: Number[];
  game: string;
  game_id: number;
  price: number;
  color: string;
  date: string;
}

interface CartState {
  games: CartObject[];
  totalPrice: number;
}

const initialCartState: CartState = {
  games: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addGame(state: CartState, action: PayloadAction<CartObject>) {
      state.games.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeGame(state, action) {
      state.games = action.payload;
      state.totalPrice = 0;
      state.games.forEach((games) => {
        state.totalPrice += games.price;
      });
    },
    removeAllGames(state, action) {
      state.games = action.payload;
      state.totalPrice = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
