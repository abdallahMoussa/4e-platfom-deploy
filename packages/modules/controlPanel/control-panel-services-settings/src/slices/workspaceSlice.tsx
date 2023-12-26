import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ResponseModel } from "../models/response-model";
import { SubsystemModel } from "../models/subsystemsModel";
import { workSpaceApiConsume } from "../requests/axios-api";


export const getSubSystems= createAsyncThunk<ResponseModel,any>(
  "workspace/fetchSubsystems",
  async (searchTerm: string,data:any) => {
    const response = await workSpaceApiConsume.getAllSubsystems({
      pageSize: data?.pageSize,
      pageNumber: data?.pageNumber,
      searhTerm:searchTerm
    });
    return response;
  }
);


interface SubsystemState {
  items: SubsystemModel[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  totalpages:number;

}

const initialState: SubsystemState = {
  items: [],
  status: "idle",
  error: null,
  totalpages: 1,
};

const SubsystemSlice = createSlice({
  name: "getSubsystem",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSubSystems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSubSystems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.result as unknown as SubsystemModel[];
        state.totalpages= action.payload.totalPages as number;
      })
      .addCase(getSubSystems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export default SubsystemSlice.reducer;
