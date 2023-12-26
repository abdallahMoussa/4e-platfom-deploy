import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpRequest } from '../../requests/apis';

// Async Thunk action creator
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (credentials:{},thunkApi) => {
    try {
      const userData = await httpRequest.login(credentials);
      return userData.result;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState= {
  currentUser: null,
  token:null,
  isLoading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Reducers for synchronous actions
    // ... (loginStart, loginSuccess, loginFailure)
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const userToken = (state) => state.user.token;


export default userSlice.reducer;

