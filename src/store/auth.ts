import { createSlice } from '@reduxjs/toolkit';

interface IAuthInfo {
  authToken: string;
}

let initialAuth: IAuthInfo = {
  authToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuth,
  reducers: {
    login(state, action) {
      state.authToken = action.payload;
    },
    logout(state, action) {
      state.authToken = '';
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
