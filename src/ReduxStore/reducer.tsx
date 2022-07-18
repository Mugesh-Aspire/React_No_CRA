import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { API_METHODS } from "../Constants/strings";
import client from "../request";
import { removeStorage } from "../Storage/localStorage";
import initialState from "./initialState";

export const fetchTeamList = createAsyncThunk(
  API_METHODS.REQUEST_TEAM_LIST,
  async () => {
    const response = await client.get(API_METHODS.REQUEST_TEAM_LIST);
    return response.data.Team;
  }
);

const rootReducer = createSlice({
  name: "rootReducer",
  initialState: initialState,
  reducers: {
    handleKeys(state, action) {
      state[action.payload.key] = action.payload.value;
    },
    signUpSuccess(state, action) {
      const { payload } = action;
      (state.loggedInUserDetails = payload),
        (state.isLoggedIn = true),
        (state.userToken = payload.userToken);
    },
    loginSuccess(state, action) {
      const { payload } = action;
      (state.loggedInUserDetails = {...payload}),
        (state.isLoggedIn = true),
        (state.userToken = payload.userToken);
    },
    logoutSuccess(state) {
      (state.loggedInUserDetails = {}),
        (state.isLoggedIn = false),
        (state.userToken = "");
        state.teamListDetails=[]
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTeamList.pending, (state) => {
      state.teamListLoading = true;
    });
    builder.addCase(fetchTeamList.fulfilled, (state, action) => {
      state.teamListDetails =state.teamListDetails.length?state.teamListDetails: action.payload;
      state.teamListLoading = false;
    });
    builder.addCase(fetchTeamList.rejected, (state) => {
      state.teamListLoading = false;
    });
  },
});

export default rootReducer.reducer;
export const { handleKeys, signUpSuccess, loginSuccess, logoutSuccess } = rootReducer.actions;
