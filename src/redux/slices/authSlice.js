import { createSlice } from "@reduxjs/toolkit";
import {
  LoginAsyncThunk,
  SignupAsyncThunk,
} from "../asyncThunk/authAsyncThunk";
import { THUNK_STATUS } from "../constant/routesConstant";

const initialState = {
  token: null,
  loginStatus: null,
  userData: [],
  userStatus: null,
};
export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeToken: (state, action) => {
      localStorage.removeItem("persist:root");
      localStorage.clear();
      window.location.reload();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginAsyncThunk.pending, (state, action) => {
      state.loginStatus = THUNK_STATUS.LOADING;
    });
    builder.addCase(LoginAsyncThunk.fulfilled, (state, action) => {
      state.userData = action?.payload?.data;
      if (action.payload.data.status == "success") {
        state.token = action.payload.data.token;
      }

      state.loginStatus = THUNK_STATUS.SUCCESS;
    });
    // <------------------ SignUp ------------------------>
    builder.addCase(SignupAsyncThunk.pending, (state, action) => {
      state.userStatus = THUNK_STATUS.LOADING;
    });
    builder.addCase(SignupAsyncThunk.fulfilled, (state, action) => {
      state.userData = action?.payload?.data;
      if (action.payload.data.status == "success") {
        state.token = action.payload.data.token;
      }
      state.userStatus = THUNK_STATUS.SUCCESS;
    });
    builder.addCase(SignupAsyncThunk.rejected, (state, action) => {
      state.userStatus = THUNK_STATUS.FAILED;
    });
  },
});
export const { removeToken } = AuthSlice.actions;
export const authState = (state) => state.authState;
export default AuthSlice.reducer;
