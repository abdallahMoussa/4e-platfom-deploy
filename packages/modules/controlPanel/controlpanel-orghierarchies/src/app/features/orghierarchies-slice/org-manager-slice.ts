
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ResponseModel } from "../../models/response-model";
import { orgApiConsume,AggApiConsume,UserApiConsume } from "../../network/requests";
import { ManagerModel } from "../../models/manager-model";

export const fetchOrgManager = createAsyncThunk<ResponseModel, any>(
    "orgs/fetchorgManager",
    async (id: string) => {
     
      const response = await AggApiConsume.getOrgManagerbyId(id);
      return response;
       });
       interface OrgManagerState {
        data: ManagerModel |null;
        status: string;
        message: string;
      }
      let initialState: OrgManagerState = {
        data:null ,
        status: "idle",
        message: "",
      };
export const orgManagerSlice = createSlice({
  name: 'org-manager',
  initialState,
  reducers: {},
      
      extraReducers: (builder) => {
        builder
          .addCase(fetchOrgManager.pending, (state: OrgManagerState) => {
            state.status = "loading";
          })
          .addCase(
            fetchOrgManager.fulfilled,
            (state: OrgManagerState, action: PayloadAction<ResponseModel>) => {
              state.status = "succeeded";
              state.data = action.payload.result as ManagerModel;
              //   state.message = action.payload.message
              // state.message=action.payload
            }
          )
          .addCase(
            fetchOrgManager.rejected,
            (state: OrgManagerState, action: PayloadAction<any>) => {
              state.status = "failed";
              state.message = action.payload?.message;
              // state.message=action.payload
            }
          );
      },
})

// Action creators are generated for each case reducer function

export default orgManagerSlice.reducer