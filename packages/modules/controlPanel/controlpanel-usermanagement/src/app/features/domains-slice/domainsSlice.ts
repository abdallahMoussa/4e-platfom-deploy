import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { domainApiConsume } from "../../requests";
import {
  DomainsModel,
} from "../../models/domain/domain-model";
import { ResponseModel } from "../../models/response-model";

export const fetchDomains = createAsyncThunk<ResponseModel, any>(
  "domains/fetchDomains",
  async (data: any, thunkApi) => {
    try {
      const response = await domainApiConsume.getAllDomains({
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

interface domains {
  data: DomainsModel[];
  status: string;
  totalPages:number;
  message: string;
}

let initialState: domains = {
  data: [],
  status: "idle",
  totalPages:0,
  message: "",
};

const domainsSlice = createSlice({
  name: "domains",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDomains.pending, (state: domains) => {
        state.status = "loading";
      })
      .addCase(
        fetchDomains.fulfilled,
        (state: domains, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.data = action.payload.result as unknown as DomainsModel[];
          state.totalPages=action.payload.totalPages
        }
      )
      .addCase(
        fetchDomains.rejected,
        (state: domains, action: PayloadAction<any>) => {
          state.status = "failed";
          console.log("action payload", action.payload)
          state.message = action.payload;
        }
      );
  },
});

export default domainsSlice.reducer;
