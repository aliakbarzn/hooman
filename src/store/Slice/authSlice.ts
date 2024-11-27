import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = (() => {
  if (typeof window !== 'undefined') {
    const savedUser = localStorage.getItem('user');
    const savedToken = localStorage.getItem('token');
    
    return {
      user: savedUser ? JSON.parse(savedUser) : null,
      token: savedToken || null,
      isAuthenticated: !!savedToken
    };
  }
  
  return {
    user: null,
    token: null,
    isAuthenticated: false
  };
})();

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: User; token: string }>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    }
  }
});

export const { login, logout } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;