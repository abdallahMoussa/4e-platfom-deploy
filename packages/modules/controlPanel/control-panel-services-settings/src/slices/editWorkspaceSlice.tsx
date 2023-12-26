import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ResponseModel } from "../models/response-model";
import { SubsystemModel } from "../models/subsystemsModel";
import { AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { workSpaceAggregatorApiConsume } from "../requests/aggregator-api";
import { GetWorkSpaceByIdResponse } from "../Shared/models/VM/GetWorkSpaceByIdResponse";

interface EditSubsystemArgs {
    id: string;
    item: {};
  }

  export const editSubsystem = createAsyncThunk<ResponseModel, EditSubsystemArgs,AsyncThunkConfig>(
    'workspace/editSubsystem',
    async ({ id, item }, thunkAPI) => {
      try {

        const response = await workSpaceAggregatorApiConsume.editSubsystem(id, item);
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue({ errorMessage: 'An error occurred' });
      }
    }
  );

  export const editSubsystemCard= createAsyncThunk<ResponseModel, EditSubsystemArgs,AsyncThunkConfig>(
    'workspace/editSubsystem',
    async ({ id, item }, thunkAPI) => {
      try {
        
        const response = await workSpaceAggregatorApiConsume.editSubsystemCard(id, item);
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue({ errorMessage: 'An error occurred' });
      }
    }
  );
  
interface SubsystemState {
  item: SubsystemModel;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SubsystemState = {
  item: new SubsystemModel(),
  status: "idle",
  error: null,
};
const editDataSlice = createSlice({
    name: 'editData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(editSubsystem.pending, (state) => {
          state.status = "loading";
        })
        .addCase(editSubsystem.fulfilled, (state, action) => {
          state.status = "succeeded";
        console.log(action.payload);
        })
        .addCase(editSubsystem.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message ?? "An error occurred";
        });
    },
  });
  
export default editDataSlice.reducer;
