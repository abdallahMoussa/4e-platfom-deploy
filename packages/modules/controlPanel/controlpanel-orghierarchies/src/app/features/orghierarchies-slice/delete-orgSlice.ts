import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ResponseModel } from "../../models/response-model";
import { orgApiConsume } from "../../network/requests";
import { OrgHierarchyModel } from "../../models/org-model";




export const deleteOrgAsync= createAsyncThunk<ResponseModel,string>(
  "org/deleteOrg",
  async (orgId:string) => {
    const response = await orgApiConsume.delete(orgId,{removeReason:"this is reason for remove"})
    return response;
  }
);

interface OrgState {
  items: OrgHierarchyModel[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: OrgState = {
  items: [],
  status: "idle",
  error: null,
};

const deleteOrSlice = createSlice({
  name: "deleteOrg",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteOrgAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteOrgAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        //const deletedItemId = action.meta.arg;
      //  state.items = state.items.filter(item => item.id !== deletedItemId);
      })
      .addCase(deleteOrgAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export default deleteOrSlice.reducer;
