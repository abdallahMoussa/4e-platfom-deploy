import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ResponseModel } from "../models/response-model";
import { workSpaceAggregatorApiConsume } from "../requests/aggregator-api";
import { WorkspaceComponentModel } from "../models/workspaceComponent-model";


export const getWorkSpaceComponentById = createAsyncThunk<ResponseModel, { id: string; searchTerm: any }>(
  "aggregator/getWorkSpaceComponent",
  async ({ id, searchTerm }) => {
    const response = await workSpaceAggregatorApiConsume.getWorkSpaceComponent(id, { searchTerm });
    return response;
  }
);


interface SubsystemState {
  items: WorkspaceComponentModel[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SubsystemState = {
  items: [],
  status: "idle",
  error: null,
};

const WorkSpaceComponentSlice = createSlice({
  name: "getworkspace",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWorkSpaceComponentById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getWorkSpaceComponentById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.result as unknown as WorkspaceComponentModel[];
      })
      .addCase(getWorkSpaceComponentById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export default WorkSpaceComponentSlice.reducer;
