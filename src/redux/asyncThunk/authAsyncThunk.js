import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTE } from "../constant/routesConstant";
import { LoginService, SignUpService } from "../services/authService";

export const LoginAsyncThunk = createAsyncThunk(
  ASYNC_ROUTE.LOGIN,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await LoginService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const SignupAsyncThunk = createAsyncThunk(
  ASYNC_ROUTE.SIGNUP,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await SignUpService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
