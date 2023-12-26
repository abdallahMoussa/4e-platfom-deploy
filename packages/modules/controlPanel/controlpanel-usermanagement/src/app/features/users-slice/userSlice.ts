import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { userApiConsume } from "../../requests";
import { ResponseModel } from "../../models/response-model";
import { UserModel } from "../../models/users/user-model";

export const fetchUser = createAsyncThunk<
  ResponseModel,
  number | string | Number
>("user/fetchUser", async (data: number | string | Number, thunkApi) => {
  try {
    const response = await userApiConsume?.getUserbyId(data);
    console.log("data is :", response);
    return response;
  } catch (err: any) {
    return thunkApi.rejectWithValue(err);
  }
});
interface user {
  data: UserModel;
  status: string;
  message: string;
}
let initialState: user = {
  data: new UserModel(
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    0,
    "",
    "",
    new Date(),
    "",
    "",
    "",
    "",
    "",
    ""
  ),
  status: "idle",
  message: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state: user) => {
        state.status = "loading";
      })
      .addCase(
        fetchUser.fulfilled,
        (state: user, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.data = action.payload?.result as unknown as UserModel;
        }
      )
      .addCase(
        fetchUser.rejected,
        (state: user, action: PayloadAction<any>) => {
          state.status = "failed";
          state.message = action.payload?.message;
        }
      );
  },
});

export default userSlice.reducer;
