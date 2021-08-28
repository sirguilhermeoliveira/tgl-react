import { createSlice } from '@reduxjs/toolkit';

export interface CartInfoObject {
  id: number;
  gameAdded: string;
  numbers: String[];
  price: number;
  color: string;
  date: string;
}

interface CartInfoState {
  info: CartInfoObject[];
  totalPrice: number;
}

const initialCartInfoState: CartInfoState = {
  info: [],
  totalPrice: 0,
};

const cartInfoSlice = createSlice({
  name: 'cartInfo',
  initialState: initialCartInfoState,
  reducers: {
    addInfo(state, action) {
      state.info.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeInfo(state, action) {
      state.info = action.payload;
      let totalPrice: number = 0;
      state.info.forEach((info) => {
        totalPrice += info.price;
      });
      state.totalPrice = totalPrice;
    },
  },
});

export const cartInfoActions = cartInfoSlice.actions;
export default cartInfoSlice.reducer;
