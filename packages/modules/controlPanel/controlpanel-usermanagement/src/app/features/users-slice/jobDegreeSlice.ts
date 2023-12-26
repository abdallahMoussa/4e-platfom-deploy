import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { jobDegreeApiConsume } from "../../requests";
import { jobDegreeModel } from "../../models/job-degree/job-degree-model";
import { ResponseModel } from "../../models/response-model";

export const fetchJobDegree = createAsyncThunk<ResponseModel, any>(
  "jobDegree/fetchJobDegree",
  async (data: any, thunkApi) => {
    try {
      const response = await jobDegreeApiConsume.getAllJobDegree({
        pageSize: data?.pageSize,
        pageNumber: data?.pageNumber,
      });
      console.log("data is :", response);
      return response;
    } catch (err: any) {
      return thunkApi.rejectWithValue(err?.message);
    }
  }
);

interface jobDegrees {
  data: jobDegreeModel[];
  status: string;
  message: string;
}

let initialState: jobDegrees = {
  data: [],
  status: "idle",
  message: "",
};

const jobDegreeSlice = createSlice({
  name: "jobDegree",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobDegree.pending, (state: jobDegrees) => {
        state.status = "loading";
      })
      .addCase(
        fetchJobDegree.fulfilled,
        (state: jobDegrees, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.data = action.payload.result as unknown as jobDegreeModel[];
        }
      )
      .addCase(
        fetchJobDegree.rejected,
        (state: jobDegrees, action: PayloadAction<any>) => {
          state.status = "failed";
          console.log("action payload", action.payload)
          state.message = action.payload;
        }
      );
  },
});

export default jobDegreeSlice.reducer;
