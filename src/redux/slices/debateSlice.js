import { createSlice } from "@reduxjs/toolkit";
import { THUNK_STATUS } from "../constant/routesConstant";
// import {
//   BuyUserTradeAsyncThunk,
//   SellUserTradeAsyncThunk,
// } from "../asyncThunk/userAsyncThunk/postBuySellTradeAsyncThunk";
import {
  CreateDebateAsyncThunk,
  GetDebateAsyncThunk,
} from "../asyncThunk/debateAsyncThunk";

const initialState = {
  DebatePostData: [],
  DebatePostDataStatus: null,
  DebateGetData: [],
  DebateGetDataStatus: null,
};

export const DebateTrade = createSlice({
  name: "debate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // <------------------------- Create Debate ------------------------------->
    builder.addCase(CreateDebateAsyncThunk.pending, (state, action) => {
      state.DebatePostDataStatus = THUNK_STATUS.LOADING;
    });
    builder.addCase(CreateDebateAsyncThunk.fulfilled, (state, action) => {
      state.DebatePostDataStatus = THUNK_STATUS.SUCCESS;
      state.DebatePostData = action?.payload?.data;
    });
    builder.addCase(CreateDebateAsyncThunk.rejected, (state, action) => {
      state.DebatePostDataStatus = THUNK_STATUS.FAILED;
    });

    
    // <------------------------- Get Debate ------------------------------->
    builder.addCase(GetDebateAsyncThunk.pending, (state, action) => {
      state.DebateGetDataStatus = THUNK_STATUS.LOADING;
    });
    builder.addCase(GetDebateAsyncThunk.fulfilled, (state, action) => {
      state.DebateGetDataStatus = THUNK_STATUS.SUCCESS;
      state.DebateGetData = action?.payload?.data;
    });
    builder.addCase(GetDebateAsyncThunk.rejected, (state, action) => {
      state.DebateGetDataStatus = THUNK_STATUS.FAILED;
    });
  },
});
export const DebateTradeState = (state) => state.DebateTradeState;
export default DebateTrade.reducer;
