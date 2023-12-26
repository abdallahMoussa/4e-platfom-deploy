import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ResponseModel } from "../../models/response-model";
import { UserDataModel } from "../../models/overview/user-view-model";
import { userProfileOverviewApiConsume } from "../../../network/aggregator-requests";

export const fetchUserView = createAsyncThunk<ResponseModel, any>(
  "user-profile-view/fetchUserView",
  async (data: any, thunkApi) => {
    try {
      const response = await userProfileOverviewApiConsume.getUserView();
      console.log("data is :", response);
      return response;
    } catch (err: any) {
      return thunkApi.rejectWithValue(err?.message);
    }
  }
);

interface UserData {
  data: UserDataModel | any;
  status: string;
  totalPages: number;
  message: string;
}

let initialState: UserData = {
  data: {},
  status: "idle",
  totalPages: 0,
  message: "",
};

const userViewSlice = createSlice({
  name: "user-profile-view",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserView.pending, (state: UserData) => {
        state.status = "loading";
      })
      .addCase(
        fetchUserView.fulfilled,
        (state: UserData, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.data = action.payload.result as unknown as UserDataModel;
          state.totalPages = action.payload.totalPages;
        }
      )
      .addCase(
        fetchUserView.rejected,
        (state: UserData, action: PayloadAction<any>) => {
          state.status = "failed";
          console.log("action payload", action.payload);
          state.message = action.payload;
        }
      );
  },
});

export default userViewSlice.reducer;
