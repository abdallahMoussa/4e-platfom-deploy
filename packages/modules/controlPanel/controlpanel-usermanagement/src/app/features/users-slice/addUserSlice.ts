import { ResponseModel } from "./../../models/response-model";
// productSlice.js
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../../models/users/add-user-model";
import { userApiConsume } from "../../aggregator-requests";

interface initialStateType {
  status: string;
  message: string;
}
const initialState: initialStateType = {
  status: "idle",
  message: "",
};

export const addUser = createAsyncThunk<ResponseModel, any>(
  "addUser",
  async (data: any, thunkApi) => {
    try {
      const response = await userApiConsume.AddUser(data);
      console.log("response", response);
      return response;
    } catch (err: any) {
      console.log("err message", err.message);
      return thunkApi.rejectWithValue(err);
    }
  }
);

const addUserSlice = createSlice({
  name: "addUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state: initialStateType) => {
        state.status = "loading";
      })
      .addCase(
        addUser.fulfilled,
        (state: initialStateType, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.message = action.payload?.message;
        }
      )
      .addCase(
        addUser.rejected,
        (state: initialStateType, action: PayloadAction<any>) => {
          state.status = "failed";
          state.message = action.payload?.message;
        }
      );
  },
});

export default addUserSlice.reducer;
