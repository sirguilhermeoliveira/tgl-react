import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface AuthState {
  authToken: string;
}

let initialAuth: AuthState = {
  authToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuth,
  reducers: {
    login(state: AuthState, action: PayloadAction<string>) {
      state.authToken = action.payload;
    },
    logout(state: AuthState, action: PayloadAction<string>) {
      state.authToken = '';
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
