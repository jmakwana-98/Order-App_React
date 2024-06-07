import { configureStore } from '@reduxjs/toolkit';
import { orderReducer } from './reducers';

const store = configureStore({
    reducer: orderReducer,
  });
  
// Export the RootState type
export type RootState = ReturnType<typeof store.getState>;

// Export the store
export default store;