import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface State {
  loading: boolean;
  error: string | undefined;
  name: string;
}

const initialState: State = {
  error: '',
  loading: false,
  name: '',
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    clearHomeSlice: () => initialState,
  },

  /* api 
  extraReducers: builder => {
    builder
      .addCase(postLogin.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(
        postLogin.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.loading = false;
          state.loginResp = action.payload;
        },
      )
      .addCase(postLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
  */
});

export const {setName, clearHomeSlice} = homeSlice.actions;
export default homeSlice.reducer;
