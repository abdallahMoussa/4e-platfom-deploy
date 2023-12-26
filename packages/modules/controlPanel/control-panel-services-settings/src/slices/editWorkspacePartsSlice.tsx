import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ResponseModel } from "../models/response-model";
import { SubsystemModel } from "../models/subsystemsModel";
import { AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { workSpaceApiConsume } from "../requests/axios-api";
import { WorkspaceComponentModel } from "../models/workspaceComponent-model";

interface EditSubsystemPartsArgs {
    id: string;
    item: {};
  }

  export const editSubsystemParts = createAsyncThunk<ResponseModel, EditSubsystemPartsArgs,AsyncThunkConfig>(
    'workspace/editSubsystemParts',
    async ({ id, item }, thunkAPI) => {
      try {
        const response = await workSpaceApiConsume.editWorkspaceParts(id, item);
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue({ errorMessage: 'An error occurred' });
      }
    }
  );
  
interface SubsystemPartsState {
  item: WorkspaceComponentModel ;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SubsystemPartsState = {
  item: new WorkspaceComponentModel(),
  status: "idle",
  error: null,
};
const editDataSlice = createSlice({
    name: 'editData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(editSubsystemParts.pending, (state) => {
          state.status = "loading";
        })
        .addCase(editSubsystemParts.fulfilled, (state, action) => {
          state.status = "succeeded";
          console.log(action.payload);
        })
        .addCase(editSubsystemParts.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message ?? "An error occurred";
        });
    },
  });
  
export default editDataSlice.reducer;
