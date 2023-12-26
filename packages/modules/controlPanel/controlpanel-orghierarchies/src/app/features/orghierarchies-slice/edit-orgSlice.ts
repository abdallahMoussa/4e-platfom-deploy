// edit-org-slice.js
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { orgApiConsume } from "../../network/requests";
import { ResponseModel } from "../../models/response-model";
import { PutOrgModel } from "../../models/consume-org-model";

// Define the initial state
const initialState = {
  status: "idle",
  message: "",
};

// Create an async thunk for editing an organization
export const editOrg = createAsyncThunk<ResponseModel,PutOrgModel>(
  "org/editOrg",
  async (updateOrg:PutOrgModel, thunkApi) => {
    try {
      const response = await orgApiConsume.update(updateOrg);
      console.log("response", response);
      return response;
    } catch (err: any) {
      console.log("err message", err.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

// Create the editOrg slice
const editOrgSlice = createSlice({
  name: "editOrg",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editOrg.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        editOrg.fulfilled,
        (state, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.message = action.payload?.message;
        }
      )
      .addCase(
        editOrg.rejected,
        (state, action: PayloadAction<any>) => {
          state.status = "failed";
          state.message = action.payload?.message;
        }
      );
  },
});

export default editOrgSlice.reducer;