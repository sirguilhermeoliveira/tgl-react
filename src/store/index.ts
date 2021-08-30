import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import cartInfoReducer from './cart';
import cartSaveReducer from './cartbet';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cartInfo: cartInfoReducer,
    cartSave: cartSaveReducer,
  },
});
