import { userProfileOverviewApiConsume } from "../../../network/aggregator-requests";
import { ResponseModel } from "./../../models/response-model";
// productSlice.js
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface initialStateType {
  status: string;
  message: string;
}
const initialState: initialStateType = {
  status: "idle",
  message: "",
};

export const addUserJobInfo = createAsyncThunk<ResponseModel, any>(
  "user-profile-add-job-info/addUserJobInfo",
  async (data, thunkApi) => {
    try {
      const response = await userProfileOverviewApiConsume.postJobInfo(data);
      console.log("response", response);
      return response;
    } catch (err: any) {
      console.log("err message", err.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

const addUserJobInfoSlice = createSlice({
  name: "user-profile-add-job-info",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUserJobInfo.pending, (state: initialStateType) => {
        state.status = "loading";
      })
      .addCase(
        addUserJobInfo.fulfilled,
        (state: initialStateType, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.message = action.payload?.message;
        }
      )
      .addCase(
        addUserJobInfo.rejected,
        (state: initialStateType, action: PayloadAction<any>) => {
          state.status = "failed";
          state.message = action.payload?.message;
        }
      );
  },
});

export default addUserJobInfoSlice.reducer;
