import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { ResponseModel } from "../../models/response-model";
import {
  RoleUserModelArray,
  UserRole,
} from "../../models/role-user/role-model-user";
import { fetchDetailsRolesById } from "../role/rolesSlice";
import {
  UsersNotInRoleModel,
  UsersNotInRoleModelArray,
} from "../../models/role-user/users-not-in-role-model";
import { AddUsersToRoleModel } from "../../models/role-user/add-user-to-role-model";
import { UserRoleApiConsume } from "../../Rolerequest";
import { DeleteUserRoleModel } from "../../models/role-user/delete-user-role-model";

export const fetchUserRoles = createAsyncThunk<
  ResponseModel,
  { id: string; params?: any }
>("UserRoles/fetchUserRoles", async ({ id, params }) => {
  const response = await UserRoleApiConsume.GetUserByRoleId(id, {
    pageSize: params?.pageSize,
    pageNumber: params?.pageNumber,
    searchText: params?.searchText,
  });

  console.log("data is :", response);
  return response;
});

export const fetchUserNoInRoles = createAsyncThunk<
  ResponseModel,
  { id: string; params?: any }
>("UserNoInRoles/fetchUserNoInRoles", async ({ id, params }, thunkAPI) => {
  try {
    const response = await UserRoleApiConsume.GetUsersNoInRole(id, {
      pageSize: params?.pageSize,
      pageNumber: params?.pageNumber,
      search: params?.search,
    });
    console.log("data no users is :", response);
    return response;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const removeUserRoleAsync = createAsyncThunk<ResponseModel,DeleteUserRoleModel>(
  "roleUser/removeUserRole",
  async (deleteUserRoleModel: DeleteUserRoleModel, thunkAPI) => {
    try {
    const  response=  await UserRoleApiConsume.DeleteUserRole(deleteUserRoleModel);
      let id = deleteUserRoleModel.id;
      
      if(response.statusEnum!==5){
          thunkAPI.dispatch(fetchDetailsRolesById({ id }) as any);
          thunkAPI.dispatch(fetchUserRoles({ id }) as any);
      }
    
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const AddUsersToRole = createAsyncThunk<ResponseModel, AddUsersToRoleModel>(
  "data/AddUsersToRole",
  async (itemData: AddUsersToRoleModel, thunkAPI) => {
    try {
      let roleId = itemData.roleId;
   // itemData.roleId="b8afb036-3e79-4927-e3bc-08dbe0534930";
      const response = await UserRoleApiConsume.AddUsersToRole(itemData);
      if(response.statusEnum!==4){
        thunkAPI.dispatch(fetchUserRoles({ id: roleId }) as any);
        thunkAPI.dispatch(fetchDetailsRolesById({ id: roleId }) as any);
      }
     
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
interface roleUser {
  data: RoleUserModelArray;
  status: string;
  message: string;
  messageAddFail: string;
  messageAddSucces: string;

  UserNoInRoles: UsersNotInRoleModelArray;
}
let initialState: roleUser = {
  data: new RoleUserModelArray([], 0, 0),
  status: "idle",
  message: "",
  messageAddFail:"",
  messageAddSucces:"",
  UserNoInRoles: new UsersNotInRoleModelArray([], 0, 0),
};

const roleUserSlice = createSlice({
  name: "userRoles",
  initialState,
  reducers: {
    restMassge: (state: roleUser) => {
      state.message = "";
      state.messageAddFail = "";
      state.messageAddSucces = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserRoles.pending, (state: roleUser) => {
        state.status = "loading";
      })
      .addCase(
        fetchUserRoles.fulfilled,
        (state: roleUser, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.data.data = action.payload.result as unknown as UserRole[];
          state.data.totalItems = action.payload.totalItems;
          state.data.totalPages = action.payload.totalPages;
          //   state.message = action.payload.message
          // state.message=action.payload
        }
      )
      .addCase(
        fetchUserRoles.rejected,
        (state: roleUser, action: PayloadAction<any>) => {
          state.status = "failed";
        //  state.message = action.payload?.message;
          // state.message=action.payload
        }
      );
    // builder.addCase(removeUserRoleAsync.fulfilled, (state, action) => {
    //   console.log("Before removal:", state.data);
    //   state.data.data = state.data.data.filter(
    //     (a) => a.userId !== action.payload
    //   );
    //   console.log("After removal:", state.data);
    //   console.log("Success remove");
    // });
    // builder.addCase(removeUserRoleAsync.pending, (state) => {
    //   state.status = "loading";
    // });
    // builder.addCase(removeUserRoleAsync.rejected, (state, action) => {
    //   state.status = "failed";
    //   //state.message = action.error.message;
    // });

    builder
      .addCase(fetchUserNoInRoles.pending, (state: roleUser) => {
        state.status = "loading";
      })
      .addCase(
        fetchUserNoInRoles.fulfilled,
        (state: roleUser, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
       //   state.message = action.payload.message;
          state.UserNoInRoles.data = action.payload
            .result as unknown as UsersNotInRoleModel[];
          state.UserNoInRoles.totalItems = action.payload.totalItems;
          state.UserNoInRoles.totalPages = action.payload.totalPages;
        }
      )
      .addCase(
        fetchUserNoInRoles.rejected,
        (state: roleUser, action: PayloadAction<any>) => {
          state.status = "failed";
         // state.message = action.payload;
          // state.message=action.payload
        }
      );
   
  },
});

export default roleUserSlice.reducer;
export const {restMassge} = roleUserSlice.actions;
