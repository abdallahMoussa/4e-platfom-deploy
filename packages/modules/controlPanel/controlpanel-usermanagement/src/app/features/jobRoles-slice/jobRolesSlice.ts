import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { jobRoleApiConsume } from "../../requests";
import { ResponseModel } from "../../models/response-model";
import { JobRoleModel } from "../../models/job-role/job-role";

export const fetchJobRoles = createAsyncThunk<ResponseModel, any>(
  "jobRoles/fetchJobRoles",
  async (data: any, thunkApi) => {
    try {
      const response = await jobRoleApiConsume?.getAllJobRoles({
        pageSize: data?.pageSize,
        pageNumber: data?.pageNumber,
      });
      console.log("data is :", response);
      return response;
    } catch (err: any) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
interface jobRoles {
  data: JobRoleModel[];
  status: string;
  message: string;
}
let initialState: jobRoles = {
  data: [],
  status: "idle",
  message: "",
};

const jobRolesSlice = createSlice({
  name: "jobRoles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobRoles.pending, (state: jobRoles) => {
        state.status = "loading";
      })
      .addCase(fetchJobRoles.fulfilled, (state: jobRoles, action: PayloadAction<ResponseModel>) => {
        state.status = "succeeded";
        state.data = action.payload.result as unknown as JobRoleModel[];
      })
      .addCase(fetchJobRoles.rejected, (state: jobRoles, action: PayloadAction<any>) => {
        state.status = "failed";
        console.log("action payload", action.payload);
        state.message = action.payload.message;
      });
  },
});

export default jobRolesSlice.reducer;
