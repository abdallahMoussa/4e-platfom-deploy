import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { orgApiConsume } from "../../network/requests";
import { OrgHierarchyModel, OrgModelArray } from "../../models/org-model";
import { ResponseModel } from "../../models/response-model";


export const fetchOrgs = createAsyncThunk<ResponseModel, any>(
  "orgs/fetchorgs",
  async (data: any) => {
    
    const response = await orgApiConsume.getAllOrgs({
      categoryId: data.categoryId,
    });
   
    console.log("data is :", response);
    return response;
  }
);

interface OrgHierarchy {
  data: OrgHierarchyModel[];
  status: string;
  message: string;
}
let initialState: OrgHierarchy = {
  data: [],
  status: "idle",
  message: "",
};

const orgSlice = createSlice({
  name: "OrgHierarchy",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrgs.pending, (state: OrgHierarchy) => {
        state.status = "loading";
      })
      .addCase(
        fetchOrgs.fulfilled,
        (state: OrgHierarchy, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.data = action.payload.result as OrgHierarchyModel[];
          //   state.message = action.payload.message
          // state.message=action.payload
        }
      )
      .addCase(
        fetchOrgs.rejected,
        (state: OrgHierarchy, action: PayloadAction<any>) => {
          state.status = "failed";
          state.message = action.payload?.message;
          // state.message=action.payload
        }
      );
  },
}); 

//export const { addOrgToStore } = orgSlice.actions;
export default orgSlice.reducer;
