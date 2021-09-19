import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface AuthState {
  authToken: string;
  user_id: string;
}

let initialAuth: AuthState = {
  authToken: '',
  user_id: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuth,
  reducers: {
    login(state: AuthState, action: PayloadAction<string>) {
      state.authToken = action.payload;
    },
    loginEmail(state: AuthState, action: PayloadAction<string>) {
      state.user_id = action.payload;
    },
    logout(state: AuthState, action: PayloadAction<string>) {
      state.authToken = '';
      state.user_id = '';
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
