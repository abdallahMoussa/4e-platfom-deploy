import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ResponseModel } from "../../models/response-model";
import { OrgsModel } from "../../models/users/users-orgs";
import { userOrgsApiConsume } from "../../org-requests";

export const fetchOrgs = createAsyncThunk<ResponseModel>(
  "userOrgs/fetchOrgs",
  async (data: any, thunkApi) => {
    try {
      const response = await userOrgsApiConsume?.getAllOrgs();
      console.log("data is :", response);
      return response;
    } catch (err: any) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
interface orgs {
  data: OrgsModel[];
  status: string;
  message: string;
}
let initialState: orgs = {
  data: [],
  status: "idle",
  message: "",
};

const userOrgsSlice = createSlice({
  name: "userOrgs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrgs.pending, (state: orgs) => {
        state.status = "loading";
      })
      .addCase(
        fetchOrgs.fulfilled,
        (state: orgs, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.data = action.payload.result as unknown as OrgsModel[];
        }
      )
      .addCase(
        fetchOrgs.rejected,
        (state: orgs, action: PayloadAction<any>) => {
          state.status = "failed";
          console.log("action payload", action.payload);
          state.message = action.payload.message;
        }
      );
  },
});

export default userOrgsSlice.reducer;
