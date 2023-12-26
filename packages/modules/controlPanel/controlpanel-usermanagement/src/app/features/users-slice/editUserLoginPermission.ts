import { userApiConsume } from "../../requests";
import { ResponseModel } from "./../../models/response-model";
// productSlice.js
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface initialStateType {
  status: string;
  message: string;
}
const initialState: initialStateType = {
  status: "idle",
  message: "",
};

export const editUserLoginPermission = createAsyncThunk<ResponseModel, any>(
  "editUserLoginPermission",
  async (data: any, thunkApi) => {
    try {
      const response = await userApiConsume?.EditLoginPermission(
        data?.id,
        data?.body
      );
      console.log("response", response);
      return response;
    } catch (err: any) {
      console.log("err message", err.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

const editUserLoginPermissionSlice = createSlice({
  name: "addUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editUserLoginPermission.pending, (state: initialStateType) => {
        state.status = "loading";
      })
      .addCase(
        editUserLoginPermission.fulfilled,
        (state: initialStateType, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.message = action.payload?.message;
        }
      )
      .addCase(
        editUserLoginPermission.rejected,
        (state: initialStateType, action: PayloadAction<any>) => {
          state.status = "failed";
          state.message = action.payload?.message;
        }
      );
  },
});

export default editUserLoginPermissionSlice.reducer;
