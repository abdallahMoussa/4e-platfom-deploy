import { userProfileOverviewApiConsume } from "../../../network/requests";
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

export const editUserBasicInfo = createAsyncThunk<ResponseModel, any>(
  "user-profile-edit-user-basic-info/editUserBasicInfo",
  async (data, thunkApi) => {
    try {
      const response = await userProfileOverviewApiConsume.PutUserBasicInfo(
        data
      );
      console.log("response", response);
      return response;
    } catch (err: any) {
      console.log("err message", err.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

const editUserBasicInfoSlice = createSlice({
  name: "user-profile-edit-user-basic-info",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editUserBasicInfo.pending, (state: initialStateType) => {
        state.status = "loading";
      })
      .addCase(
        editUserBasicInfo.fulfilled,
        (state: initialStateType, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.message = action.payload?.message;
        }
      )
      .addCase(
        editUserBasicInfo.rejected,
        (state: initialStateType, action: PayloadAction<any>) => {
          state.status = "failed";
          state.message = action.payload?.message;
        }
      );
  },
});

export default editUserBasicInfoSlice.reducer;
