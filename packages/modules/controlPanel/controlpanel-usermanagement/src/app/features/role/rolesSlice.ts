import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {} from "../../requests";
import { ResponseModel } from "../../models/response-model";
import { RoleModelArray, role } from "../../models/role/role-model";
import { postRole } from "../../models/role/post-role";
import { roleDetails } from "../../models/role/role-details";
import { roleApiConsume } from "../../Rolerequest";
import { edittRoleModel } from "../../models/role/edit-role";

export const fetchRoles = createAsyncThunk<ResponseModel, any>(
  "roles/fetchRoles",
  async (data: any) => {
    const response = await roleApiConsume.getAllRoles({
      pageSize: data?.pageSize,
      pageNumber: data?.pageNumber,
    });
    console.log("data is :", response);
    return response;
  }
);
export const fetchDetailsRolesById = createAsyncThunk<
  ResponseModel,
  { id: string; params?: any }
>("role/fetchDetailsRolesById", async ({ id, params }) => {
  const response = await roleApiConsume.getDetailsRoleById(id, {
    pageSize: params?.pageSize,
    pageNumber: params?.pageNumber,
  });
  console.log("fetchDetailsRolesById is :", response);
  return response;
});

export const AddRoleAsync = createAsyncThunk<string, postRole>(
  "AddRole/AddRoleAsync",
  async (itemData: postRole, thunkAPI) => {
    try {
      const response = await roleApiConsume.create(itemData);
      thunkAPI.dispatch(fetchRoles({}) as any);
      // thunkAPI.dispatch(fetchDetailsRolesById({ id: roleId }) as any);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const EditRoleAsync = createAsyncThunk<string, edittRoleModel>(
  "EditRole/EditRoleAsync",
  async (itemData: edittRoleModel, thunkAPI) => {
    try {
      let id = itemData.id
      const response = await roleApiConsume.EditRole(itemData,id);
     // thunkAPI.dispatch(fetchRoles({}) as any);
      thunkAPI.dispatch(fetchDetailsRolesById({ id: id }) as any);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
interface roles {
  data: RoleModelArray;
  status: string;
  message: string;
  totalItems: number;
  totalPages: number;
  role:role;
}
let initialState: roles = {
  data: new RoleModelArray([], 0, 0),
  status: "idle",
  message: "",
  totalItems: 0,
  totalPages: 0,
  role:new role('','','','','',0,'','','')
};

const rolesSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoles.pending, (state: roles) => {
        state.status = "loading";
      })
      .addCase(
        fetchRoles.fulfilled,
        (state: roles, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.data.data = action.payload.result as unknown as role[];
          state.totalItems = action.payload.totalItems;
          state.totalPages = action.payload.totalPages;
          //   state.message = action.payload.message
          // state.message=action.payload
        }
      )
      .addCase(
        fetchRoles.rejected,
        (state: roles, action: PayloadAction<any>) => {
          state.status = "failed";
          state.message = action.payload?.message;
          // state.message=action.payload
        }
      );
    builder
      .addCase(fetchDetailsRolesById.pending, (state: roles) => {
        state.status = "loading";
      })
      .addCase(
        fetchDetailsRolesById.fulfilled,
        (state: roles, action: PayloadAction<ResponseModel>) => {
          state.status = "succeeded";
          state.role = action.payload.result as  role
          state.totalItems = action.payload.totalItems;
          state.totalPages = action.payload.totalPages;
          //   state.message = action.payload.message
          // state.message=action.payload
       
        }
      )
      .addCase(
        fetchDetailsRolesById.rejected,
        (state: roles, action: PayloadAction<any>) => {
          state.status = "failed";
          state.message = action.payload?.message;
          // state.message=action.payload
        }
      );

    builder
      .addCase(AddRoleAsync.pending, (state: roles) => {
        state.status = "loading";
      })
      .addCase(
        AddRoleAsync.fulfilled,
        (state: roles, action: PayloadAction<string>) => {
          state.status = "succeeded";
          state.message = action.payload;
        }
      )
      .addCase(
        AddRoleAsync.rejected,
        (state: roles, action: PayloadAction<any>) => {
          state.status = "failed";
          state.message = action.payload;
          // state.message=action.payload
        }
      );
      builder
      .addCase(EditRoleAsync.pending, (state: roles) => {
        state.status = "loading";
      })
      .addCase(
        EditRoleAsync.fulfilled,
        (state: roles, action: PayloadAction<string>) => {
          state.status = "succeeded";
          state.message = action.payload;
        }
      )
      .addCase(
        EditRoleAsync.rejected,
        (state: roles, action: PayloadAction<any>) => {
          state.status = "failed";
          state.message = action.payload;
          // state.message=action.payload
        }
      );
  },
});

export default rolesSlice.reducer;
export const {  } = rolesSlice.actions;
