import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { WorkSpaceApiCustom } from "../Services/Workspace";
import { ResponseModel } from "../Shared/models/response-model";
import { GetWorkSpaceByIdResponse } from "../Shared/models/VM/GetWorkSpaceByIdResponse";

export const fetchWorkSpace= createAsyncThunk<ResponseModel,any>(
  "SubsytemSettingsAggregator/GetWorkSpaceById",
  async (data:any) => {
    const response = await WorkSpaceApiCustom.getWorkSpaseById(`/GetWorkSpaceById/${data}`);
    console.log("data is :",response)
    return response;
  }
);
interface workspace {
  data: GetWorkSpaceByIdResponse;
  status: string;
  message: string;
}
let initialState: workspace = {
  data: new GetWorkSpaceByIdResponse(),
  status: "idle",
  message: "",
};

const subsytemSettingsSlice = createSlice({
  name: "SubsytemSettingsAggregator",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkSpace.pending, (state: workspace) => {
        state.status = "loading";
      })
      .addCase(
        fetchWorkSpace.fulfilled,
        (state: workspace, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.data = action.payload.result as unknown as GetWorkSpaceByIdResponse;
        //   state.message = action.payload.message
          // state.message=action.payload
        }
      )
      .addCase(
        fetchWorkSpace.rejected,
        (state: workspace, action: PayloadAction<any>) => {
          state.status = "failed";
          state.message = action.payload?.message
          // state.message=action.payload
        }
      );
  },
});

export default subsytemSettingsSlice.reducer;
