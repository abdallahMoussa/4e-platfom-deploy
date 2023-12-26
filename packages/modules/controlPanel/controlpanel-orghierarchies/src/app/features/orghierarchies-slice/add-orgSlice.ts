import { PostOrgModel } from "../../models/consume-org-model";
import { orgApiConsume } from "../../network/requests";
import { OrgProps } from "../../validation/add-org-validation";
import { ResponseModel } from "./../../models/response-model";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";


interface initialStateType {
  status: string;
  message: string;
}
const initialState: initialStateType = {
  status: "idle",
  message: "",
};

export const addOrgAsync = createAsyncThunk<ResponseModel, PostOrgModel>(
  "addOrg",
  async (data: PostOrgModel, thunkApi) => {
    try {
      const response = await orgApiConsume.post(data);
     
      console.log("response", response);
      return response;
    } catch (err: any) {
      console.log("err message", err.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

const addOrgSlice = createSlice({
  name: "addOrg",
  initialState,
  reducers: {
        
  },
  extraReducers: (builder) => {
    builder
      .addCase(addOrgAsync.pending, (state: initialStateType) => {
        state.status = "loading";
      })
      .addCase(
        addOrgAsync.fulfilled,
        (state: initialStateType, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.message = action.payload?.message;
          
        }
      )
      .addCase(
        addOrgAsync.rejected,
        (state: initialStateType, action: PayloadAction<any>) => {
          state.status = "failed";
          state.message = action.payload?.message;
        }
      );
  },
});

export default addOrgSlice.reducer;
