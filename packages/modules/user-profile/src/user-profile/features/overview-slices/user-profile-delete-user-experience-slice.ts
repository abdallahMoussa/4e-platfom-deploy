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

export const deleteUserExperience = createAsyncThunk<ResponseModel, any>(
  "user-profile-delete-user-experience/deleteUserExperience",
  async (data, thunkApi) => {
    try {
      const response = await userProfileOverviewApiConsume.DeleteUserExperience(
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

const deleteUserExperienceSlice = createSlice({
  name: "user-profile-delete-user-experience",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteUserExperience.pending, (state: initialStateType) => {
        state.status = "loading";
      })
      .addCase(
        deleteUserExperience.fulfilled,
        (state: initialStateType, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.message = action.payload?.message;
        }
      )
      .addCase(
        deleteUserExperience.rejected,
        (state: initialStateType, action: PayloadAction<any>) => {
          state.status = "failed";
          state.message = action.payload?.message;
        }
      );
  },
});

export default deleteUserExperienceSlice.reducer;
