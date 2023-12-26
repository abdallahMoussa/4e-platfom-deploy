import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {userApiConsume } from "../../requests";
import { ResponseModel } from "../../models/response-model";
import { UsersModel } from "../../models/users/users";

export const fetchUsers = createAsyncThunk<ResponseModel, any>(
  "users/fetchUsers",
  async (data: any, thunkApi) => {
    try {
      const response = await userApiConsume?.getAllUsers({
        pageSize: data?.pageSize,
        pageNumber: data?.pageNumber,
      });
      console.log("data is :", response);
      return response;
    } catch (err: any) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
interface users {
  data: UsersModel[];
  totalPages:number;
  status: string;
  message: string;
}
let initialState: users = {
  data: [],
  totalPages:0,
  status: "idle",
  message: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state: users) => {
        state.status = "loading";
      })
      .addCase(
        fetchUsers.fulfilled,
        (state: users, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.data = action.payload.result as unknown as UsersModel[];
          state.totalPages=action.payload.totalPages
        }
      )
      .addCase(
        fetchUsers.rejected,
        (state: users, action: PayloadAction<any>) => {
          state.status = "failed";
          console.log("action payload",action.payload)
          state.message = action.payload.message;
        }
      );
  },
});

export default usersSlice.reducer;
