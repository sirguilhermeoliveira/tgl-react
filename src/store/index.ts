import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import cartInfoReducer from './cart';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartInfoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
