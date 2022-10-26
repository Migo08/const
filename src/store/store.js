import { configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from '../localStorage';
import { authSlice } from './slices/auth';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
  preloadedState: loadState()
})

store.subscribe(
   () => saveState( store.getState() )
);