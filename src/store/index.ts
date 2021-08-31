import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import cartInfoReducer from './cart';
import cartSaveReducer from './cartbet';
import filterReducer from './filter';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartInfoReducer,
    cartSave: cartSaveReducer,
    filterCart: filterReducer,
  },
});