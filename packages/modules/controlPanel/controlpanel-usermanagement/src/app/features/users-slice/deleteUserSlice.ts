// productSlice.js
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {  userApiConsume } from "../../requests";
import { ResponseModel } from "../../models/response-model";
interface initialStateType {
  status: string;
  message: string;
}
const initialState: initialStateType = {
  status: "idle",
  message: "",
};

export const deleteUser = createAsyncThunk<
  ResponseModel,
  number | Number | string
>("deleteUser", async (id: number | Number | string, thunkApi) => {
  try {
    let response = await userApiConsume?.delete(id);
    return response;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error);
  }
});

const deleteUserSlice = createSlice({
  name: "deleteUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteUser.pending, (state: initialStateType) => {
        state.status = "loading";
      })
      .addCase(
        deleteUser.fulfilled,
        (state: initialStateType, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.message = action.payload?.message;
        }
      )
      .addCase(
        deleteUser.rejected,
        (state: initialStateType, action: PayloadAction<any>) => {
          state.status = "failed";
          state.message = action.payload?.message;
        }
      );
  },
});

export default deleteUserSlice.reducer;
