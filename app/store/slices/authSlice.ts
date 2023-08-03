import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";

export interface AuthState {
  authState: boolean;
  user?: {
    username: string
  }
}

const initialState: AuthState = {
  authState: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState(state, action) {
      state = action.payload;
      return state;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.reducer;

export default authSlice.reducer;