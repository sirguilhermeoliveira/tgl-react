import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import cartInfoReducer from './cart';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cartInfo: cartInfoReducer,
  },
});
