import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ResponseModel } from "../../models/response-model";
import { userProfileOverviewApiConsume } from "../../../network/aggregator-requests";
import { UserJobsInfoModel } from "../../models/overview/jobs-info-model";

export const fetchUserInfoJobs = createAsyncThunk<ResponseModel, any>(
  "user-profile-info-jobs/fetchUserInfoJobs",
  async (data: any, thunkApi) => {
    try {
      const response = await userProfileOverviewApiConsume.getJobsInfo();
      console.log("data is :", response);
      return response;
    } catch (err: any) {
      return thunkApi.rejectWithValue(err?.message);
    }
  }
);

interface UserData {
  data: UserJobsInfoModel | any;
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

const userInfoJobsSlice = createSlice({
  name: "user-profile-info-jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfoJobs.pending, (state: UserData) => {
        state.status = "loading";
      })
      .addCase(
        fetchUserInfoJobs.fulfilled,
        (state: UserData, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.data = action.payload.result as unknown as UserJobsInfoModel;
          state.totalPages = action.payload.totalPages;
        }
      )
      .addCase(
        fetchUserInfoJobs.rejected,
        (state: UserData, action: PayloadAction<any>) => {
          state.status = "failed";
          console.log("action payload", action.payload);
          state.message = action.payload;
        }
      );
  },
});

export default userInfoJobsSlice.reducer;
