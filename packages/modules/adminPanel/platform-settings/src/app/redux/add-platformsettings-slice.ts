import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {ResponseModel} from '../partials/response-model'
import axios from 'axios'
import { getToken } from '@4eplatform/shared'

export const EditPlatformMainSettings = createAsyncThunk<ResponseModel, any>('editPlatformMainSettings', async (data: any, id: any) => {
  try {
    const response = await axios.put('http://ncvc.4explain.net:5196/api/PlatformSettings/PutPlatformSettings', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization:
          `Bearer ${getToken()}`
      },
    })
    return response
  } catch (err: any) {
    return data
  }
})
interface PlatformState {
  data: any
  loading: boolean
  error: string | null
  message: string | null
}

const initialState: PlatformState = {
  data: [],
  loading: false,
  error: null,
  message: '',
}

const AddPlatformSettingsSlice = createSlice({
  name: 'EditPlatformMainSettings',
  initialState,
  reducers: {
    addItemLocally: (state, action) => {
      state.data.push(action.payload)
    },
  },  
  extraReducers(builder) {
    builder.addCase(EditPlatformMainSettings.pending, (state: PlatformState) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(EditPlatformMainSettings.fulfilled, (state: PlatformState, action: PayloadAction<ResponseModel>) => {
      state.loading = false
      state.error = null
      state.message = 'success'
      //state?.data?.push(action.payload.result as any)
    })
    builder.addCase(EditPlatformMainSettings.rejected, (state: PlatformState, action: PayloadAction<any>) => {
      state.loading = false
      state.error = action.payload ? action.payload.error : 'Failed to add item'
    })
  },
})

export default AddPlatformSettingsSlice.reducer
