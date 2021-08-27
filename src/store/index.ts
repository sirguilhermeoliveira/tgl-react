import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import recentGamesReducer from './recentgames';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    recentGames: recentGamesReducer,
  },
});
