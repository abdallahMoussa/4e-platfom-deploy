import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ResponseModel } from "../../models/response-model";
import { userAccountApiConsume } from "../../user-account-requests";
interface initialStateType {
  status: string;
  message: string;
}
const initialState: initialStateType = {
  status: "idle",
  message: "",
};

export const editUserSummary = createAsyncThunk<ResponseModel, any>(
  "editUserSummary",
  async (updatedData, thunkApi) => {
    console.log("updatedData", updatedData);
    try {
      const response = await userAccountApiConsume?.editUserSummary(
        {
          userName: updatedData?.userName,
          email: updatedData?.email,
          phoneNumber: updatedData?.phoneNumber,
          address: updatedData?.address,
          nationalId: updatedData?.nationalId,
          userGender: updatedData?.userGender,
        },
        updatedData?.id
      );
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const editUserSummarySlice = createSlice({
  name: "editUserSummary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editUserSummary.pending, (state) => {
        state.status = "loading";
        state.message = "";
      })
      .addCase(
        editUserSummary.fulfilled,
        (state: initialStateType, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.message = action.payload?.message;
        }
      )
      .addCase(
        editUserSummary.rejected,
        (state: initialStateType, action: PayloadAction<any>) => {
          state.status = "failed";
          state.message = action.payload?.message;
        }
      );
  },
});

export default editUserSummarySlice.reducer;
