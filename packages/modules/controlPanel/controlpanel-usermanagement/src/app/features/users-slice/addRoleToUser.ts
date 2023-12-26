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

export const addRoleToUser = createAsyncThunk<ResponseModel, any>(
  "addRoleToUser",
  async (data: any, thunkApi) => {
    try {
      const response = await userApiConsume?.AddRoleToUser(data);
      console.log("response", response);
      return response;
    } catch (err: any) {
      console.log("err message", err.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

const addRoleToUserSlice = createSlice({
  name: "addRoleToUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addRoleToUser.pending, (state: initialStateType) => {
        state.status = "loading";
      })
      .addCase(
        addRoleToUser.fulfilled,
        (state: initialStateType, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.message = action.payload?.message;
        }
      )
      .addCase(
        addRoleToUser.rejected,
        (state: initialStateType, action: PayloadAction<any>) => {
          state.status = "failed";
          state.message = action.payload?.message;
        }
      );
  },
});

export default addRoleToUserSlice.reducer;
