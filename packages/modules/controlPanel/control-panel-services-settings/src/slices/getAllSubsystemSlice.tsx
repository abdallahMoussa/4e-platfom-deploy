import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ResponseModel } from "../models/response-model";
import { SubsystemModel } from "../models/subsystemsModel";
import { workSpaceApiConsume } from "../requests/axios-api";


export const getSubsystemsDropdown= createAsyncThunk<any>(
  "workspace/fetchSubsystems",
  async (data:any) => {
    const response = await workSpaceApiConsume.getSubsystemsDropdown();
    console.log("getSubsystemsDropdown is :",response)
    return response;
  }
);


interface SubsystemState {
  items: SubsystemModel[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SubsystemState = {
  items: [],
  status: "idle",
  error: null,
};

const SubsystemDropdownListSlice = createSlice({
  name: "getSubsystemDropdown",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSubsystemsDropdown.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSubsystemsDropdown.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.result as unknown as SubsystemModel[];

      })
      .addCase(getSubsystemsDropdown.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export default SubsystemDropdownListSlice.reducer;
