import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { ResponseModel } from "../../models/response-model";

import { RoleWorkspacePermisionApiConsume } from "../../Rolerequest";
import {
  WorkspaceTreeArrayModel,
  WorkspaceTreeModel,
} from "../../models/role-workspace-permision/WorkspaceTreeModel";
import {
  PermissionModel,
  PermissionModelDto,
} from "../../models/role-workspace-permision/WorkspacePermissionForRoleModel";
import { postPermisionRoleMolde } from "../../models/role-workspace-permision/post-permision-role";

export const fetchWorkspaceTreePermision = createAsyncThunk<
  ResponseModel,
  { params?: any }
>(
  "WorkspaceTreePermision/fetchWorkspaceTreePermision",
  async ({ params }, thunkAPI) => {
    try {
      const response =
        await RoleWorkspacePermisionApiConsume.GetWorkspaceTreePermisionRoleId({
          RoleId: params.RoleId,
          SearchTerm: params?.SearchTerm,
        });
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchWorkspacePermissionForRole = createAsyncThunk<
  ResponseModel,
  { params?: any }
>(
  "WorkspacePermissionForRole/fetchWorkspacePermissionForRole",
  async ({ params }, thunkAPI) => {
    try {
      const response =
        await RoleWorkspacePermisionApiConsume.WorkspacePermissionForRole({
          RoleId: params.RoleId,
          search: params?.search,
          WorkSpaceKey: params?.WorkSpaceKey,
          WorkSpaceId: params?.WorkSpaceId,
          PageNumber: params?.PageNumber,
          PageSize: params?.PageSize,
        });
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const postPermisionRole = createAsyncThunk<
  ResponseModel,
  postPermisionRoleMolde
>(
  "FeatchpostPermisionRole/postPermisionRole",
  async (itemData: postPermisionRoleMolde, thunkAPI) => {
    try {
      // let roleId = itemData.roleId;
      // itemData.roleId="b8afb036-3e79-4927-e3bc-08dbe0534930";
      const response = await RoleWorkspacePermisionApiConsume.PostPermisionRole(
        itemData,
        {
          RoleId: itemData.roleId,
          WorkSpaceKey: itemData.workSpaceKey,
          WorkSpaceId: itemData.workSpaceId,
        }
      );
      // if (response.statusEnum !== 1) {
      
      // }

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

interface WorkspaceTreePermision {
  WorkspaceTree: WorkspaceTreeArrayModel;
  status: string;
  message: string;
  PermissionForRole: PermissionModel[];
}
let initialState: WorkspaceTreePermision = {
  WorkspaceTree: new WorkspaceTreeArrayModel([], 0, 0),
  status: "idle",
  message: "",
  PermissionForRole: [],
};

const roleWorkspacePermisionSlice = createSlice({
  name: "userRoles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchWorkspaceTreePermision.pending,
        (state: WorkspaceTreePermision) => {
          state.status = "loading";
        }
      )
      .addCase(
        fetchWorkspaceTreePermision.fulfilled,
        (
          state: WorkspaceTreePermision,
          action: PayloadAction<ResponseModel>
        ) => {
          state.status = "succeeded";
          state.message = action.payload.message;
          state.WorkspaceTree.data = action.payload
            .result as unknown as WorkspaceTreeModel[];
          //     state.UserNoInRoles.totalItems = action.payload.totalItems;
        }
      )
      .addCase(
        fetchWorkspaceTreePermision.rejected,
        (state: WorkspaceTreePermision, action: PayloadAction<any>) => {
          state.status = "failed";
          // state.message = action.payload;
          // state.message=action.payload
        }
      );

    builder
      .addCase(
        fetchWorkspacePermissionForRole.pending,
        (state: WorkspaceTreePermision) => {
          state.status = "loading";
        }
      )
      .addCase(
        fetchWorkspacePermissionForRole.fulfilled,
        (
          state: WorkspaceTreePermision,
          action: PayloadAction<ResponseModel>
        ) => {
          state.status = "succeeded";
          state.message = action.payload.message;
          state.PermissionForRole = action.payload
            .result as unknown as PermissionModel[];
          //     state.UserNoInRoles.totalItems = action.payload.totalItems;
        }
      )
      .addCase(
        fetchWorkspacePermissionForRole.rejected,
        (state: WorkspaceTreePermision, action: PayloadAction<any>) => {
          state.status = "failed";
          // state.message = action.payload;
          // state.message=action.payload
        }
      );
  },
});

export default roleWorkspacePermisionSlice.reducer;
export const {} = roleWorkspacePermisionSlice.actions;
