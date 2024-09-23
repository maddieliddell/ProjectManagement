import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../user/userSlice'; // Import the user slice

const store = configureStore({
  reducer: {
    user: userReducer, // Use the user slice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

export default store; // this might need to be removed