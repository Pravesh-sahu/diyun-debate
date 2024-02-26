import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTE } from "../constant/routesConstant";
import {
  CreateDebateService,
  GetDebateService,
} from "../services/debateService";

// <------------- Create-Debate --------------------->

export const CreateDebateAsyncThunk = createAsyncThunk(
  ASYNC_ROUTE.CREATE_DEBATE,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await CreateDebateService(payload);
      return response;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
// <------------- Get-Debate --------------------->

export const GetDebateAsyncThunk = createAsyncThunk(
  ASYNC_ROUTE.DEBATE_ALL,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await GetDebateService(payload);
      return response;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
