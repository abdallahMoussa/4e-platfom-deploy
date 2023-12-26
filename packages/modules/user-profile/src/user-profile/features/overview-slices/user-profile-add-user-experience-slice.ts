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

export const addUserExperience = createAsyncThunk<ResponseModel, any>(
  "user-profile-add-user-experience/addUserExperience",
  async (data, thunkApi) => {
    try {
      const response = await userProfileOverviewApiConsume.PostUserExperience(
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

const addUserExperienceSlice = createSlice({
  name: "user-profile-add-user-experience",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUserExperience.pending, (state: initialStateType) => {
        state.status = "loading";
      })
      .addCase(
        addUserExperience.fulfilled,
        (state: initialStateType, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.message = action.payload?.message;
        }
      )
      .addCase(
        addUserExperience.rejected,
        (state: initialStateType, action: PayloadAction<any>) => {
          state.status = "failed";
          state.message = action.payload?.message;
        }
      );
  },
});

export default addUserExperienceSlice.reducer;
