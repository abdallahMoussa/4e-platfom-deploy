import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ResponseModel } from "../../models/response-model";
import { userProfileOverviewApiConsume } from "../../../network/requests";
import { BasicInfoModel } from "../../models/overview/basic-info-model";

export const fetchUserBasicInfo = createAsyncThunk<ResponseModel, any>(
  "user-profile-basic-info/fetchUserBasicInfo",
  async (data: any, thunkApi) => {
    try {
      const response = await userProfileOverviewApiConsume.getBasicInfo();
      console.log("data is :", response);
      return response;
    } catch (err: any) {
      return thunkApi.rejectWithValue(err?.message);
    }
  }
);

interface UserData {
  data: BasicInfoModel | any;
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

const userBasicInfoSlice = createSlice({
  name: "user-profile-basic-info",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserBasicInfo.pending, (state: UserData) => {
        state.status = "loading";
      })
      .addCase(
        fetchUserBasicInfo.fulfilled,
        (state: UserData, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.data = action.payload.result as unknown as BasicInfoModel;
          state.totalPages = action.payload.totalPages;
        }
      )
      .addCase(
        fetchUserBasicInfo.rejected,
        (state: UserData, action: PayloadAction<any>) => {
          state.status = "failed";
          console.log("action payload", action.payload);
          state.message = action.payload;
        }
      );
  },
});

export default userBasicInfoSlice.reducer;
