import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ResponseModel } from "../../models/response-model";
import { userProfileOverviewApiConsume } from "../../../network/requests";
import { ScientificDataModel } from "../../models/overview/user-sceintific-data-model";

export const fetchUserExperienceInfo = createAsyncThunk<ResponseModel, any>(
  "user-profile-experience-info/fetchUserExperienceInfo",
  async (data: any, thunkApi) => {
    try {
      const response =
        await userProfileOverviewApiConsume.getUserExperiencebyId(data?.id);
      console.log("data is :", response);
      return response;
    } catch (err: any) {
      return thunkApi.rejectWithValue(err?.message);
    }
  }
);

interface UserData {
  data: ScientificDataModel | any;
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

const userExperiencesSlice = createSlice({
  name: "user-profile-experience-info",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserExperienceInfo.pending, (state: UserData) => {
        state.status = "loading";
      })
      .addCase(
        fetchUserExperienceInfo.fulfilled,
        (state: UserData, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.data = action.payload
            .result as unknown as ScientificDataModel[];
          state.totalPages = action.payload.totalPages;
        }
      )
      .addCase(
        fetchUserExperienceInfo.rejected,
        (state: UserData, action: PayloadAction<any>) => {
          state.status = "failed";
          console.log("action payload", action.payload);
          state.message = action.payload;
        }
      );
  },
});

export default userExperiencesSlice.reducer;
