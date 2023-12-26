import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { userApiConsume } from "../../requests";
import { userRoleModel } from "../../models/users/user-role-model";
import { ResponseModel } from "../../models/response-model";

export const fetchUserRoles = createAsyncThunk<ResponseModel, any>(
  "userRoles/fetchUserRoles",
  async (data: any, thunkApi) => {
    try {
      const response = await userApiConsume?.getAllUserRoles
        (
          data.id, {
          pageSize: data?.pageSize,
          pageNumber: data?.pageNumber,
        });
      console.log("data is :", response);
      return response;
    } catch (err: any) {
      return thunkApi.rejectWithValue(err?.message);
    }
  }
);

interface userRoles {
  data: userRoleModel[];
  status: string;
  message: string;
}

let initialState: userRoles = {
  data: [],
  status: "idle",
  message: "",
};

const userRolesSlice = createSlice({
  name: "userRoles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserRoles.pending, (state: userRoles) => {
        state.status = "loading";
      })
      .addCase(
        fetchUserRoles.fulfilled,
        (state: userRoles, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.data = action.payload.result as unknown as userRoleModel[];
        }
      )
      .addCase(
        fetchUserRoles.rejected,
        (state: userRoles, action: PayloadAction<any>) => {
          state.status = "failed";
          console.log("action payload", action.payload)
          state.message = action.payload;
        }
      );
  },
});

export default userRolesSlice.reducer;
