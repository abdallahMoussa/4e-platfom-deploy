import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { orgApiConsume } from "../../network/requests";
import { ResponseModel } from "../../models/response-model";
import { OrgCategoryModel } from "../../models/org-category";


export const fetchOrgsCategory = createAsyncThunk<ResponseModel>(
  "orgs/fetchorgsCategory",
  async () => {
    
    const response = await orgApiConsume.getAllOrgCategory();
   
    console.log("data is :", response);
    return response;
  }
);

interface OrgCategoryState {
  data: OrgCategoryModel[];
  status: string;
  message: string;
}
let initialState: OrgCategoryState = {
  data:[],
  status: "idle",
  message: "",
};

const OrgCategorySlice = createSlice({
  name: "OrgCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrgsCategory.pending, (state: OrgCategoryState) => {
        state.status = "loading";
      })
      .addCase(
        fetchOrgsCategory.fulfilled,
        (state: OrgCategoryState, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.data = action.payload.result as OrgCategoryModel[];
          //   state.message = action.payload.message
          // state.message=action.payload
        }
      )
      .addCase(
        fetchOrgsCategory.rejected,
        (state: OrgCategoryState, action: PayloadAction<any>) => {
          state.status = "failed";
          state.message = action.payload?.message;
          // state.message=action.payload
        }
      );
  },
});


export default OrgCategorySlice.reducer;
