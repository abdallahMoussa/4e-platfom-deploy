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

export const editUserExperience = createAsyncThunk<ResponseModel, any>(
  "user-profile-edit-user-experience/editUserExperience",
  async (data, thunkApi) => {
    try {
      const response = await userProfileOverviewApiConsume.PutUserExperience(
        data,
        data?.id
      );
      console.log("response", response);
      return response;
    } catch (err: any) {
      console.log("err message", err.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

const editUserExperienceSlice = createSlice({
  name: "user-profile-edit-user-experience",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editUserExperience.pending, (state: initialStateType) => {
        state.status = "loading";
      })
      .addCase(
        editUserExperience.fulfilled,
        (state: initialStateType, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.message = action.payload?.message;
        }
      )
      .addCase(
        editUserExperience.rejected,
        (state: initialStateType, action: PayloadAction<any>) => {
          state.status = "failed";
          state.message = action.payload?.message;
        }
      );
  },
});

export default editUserExperienceSlice.reducer;
