import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
      token: '',
      displayName: '',
      status: 'not-authenticated', //checking, authenticated, not-authenticated
      email: '',
      role: ''
   },
   reducers: {
      startLogin: (state, /* action */ ) => {
         state.status = 'checking';
      },
      setLogin: (state, action) => {
        state.role         = action.payload.role;
        state.displayName  = action.payload.displayName;
        state.email        = action.payload.email;
        state.token        = action.payload.token;
        state.status       = 'authenticated';
      },
      logout: (state) => {
         state.role         = '';
         state.displayName  = '';
         state.email        = '';
         state.token        = '';
         state.status       = 'not-authenticated';
         console.log('loguot');
      }
      
   }
});

export const { startLogin, setLogin, logout } = authSlice.actions;