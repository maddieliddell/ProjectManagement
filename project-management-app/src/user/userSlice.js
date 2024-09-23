import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  currentUser: null,
  isLoggedIn: false,
};

// Create the slice
const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  }
});

// Export actions generated from the slice
export const { setCurrentUser, logoutUser } = userSlice.actions;

// Selector to get the current user
export const selectCurrentUser = (state) => state.auth.currentUser;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

// Export the reducer to be included in the store
export default userSlice.reducer;

