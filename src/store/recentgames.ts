import { createSlice } from '@reduxjs/toolkit';

interface IRecentGamesInfo {
  recentGames: [];
  //recentGamesColor: number[];
}

let initialRecentGames: IRecentGamesInfo = {
  recentGames: [],
  //recentGamesColor: [],
};

const recentGamesSlice = createSlice({
  name: 'recentGames',
  initialState: initialRecentGames,
  reducers: {
    games(state, action) {
      console.log(state);
      console.log(action);
    },
  },
});

export const recentGamesActions = recentGamesSlice.actions;
export default recentGamesSlice.reducer;
