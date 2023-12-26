import { AsyncThunkAction, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WorkSpace, WorkSpaceSystem } from "../models/WorkSpace";
import { workSpaceAggregatorApiConsume } from "../requests/aggregator-api";

interface initialStateType{
    status: "idle" | "loading" | "succeeded" | "failed";
    message:string | null;
}
const initialState: initialStateType = {
    status: "idle",
    message: null,
  };
  export const addWorkSpaceCard= createAsyncThunk(
    "addWorkSpaceCard",
    async (data: WorkSpaceSystem, thunkApi) => {
      try {
        const response = await workSpaceAggregatorApiConsume.AddCardsystems(data);
        console.log("response", response);
        return response;
      } catch (err: any) {
        console.log("err message", err.message);
        return thunkApi.rejectWithValue(err.message);
      }
    }
  );

  const addWorkSpaceCardSlice = createSlice({
    name: "addWorkSpaceCard",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(addWorkSpaceCard.pending, (state: initialStateType) => {
          state.status = "loading";
        })
        .addCase(
            addWorkSpaceCard.fulfilled,
          (state: initialStateType, action:PayloadAction<any>) => {
            state.status = "succeeded";
          //   state.message = "product added successfully";
            state.message=action.payload?.message
          }
        )
        .addCase(
            addWorkSpaceCard.rejected,
          (state: initialStateType, action: PayloadAction<any>) => {
            state.status = "failed";
          //   state.message = "failed in add product";
            state.message = action.payload?.message;
          }
        );
    },
  });

  export default addWorkSpaceCardSlice.reducer;
