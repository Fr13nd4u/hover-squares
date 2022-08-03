import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOptions } from "../../models/IOptions";

interface OptionState {
  options: IOptions[];
  error: string;
};

const initialState: OptionState = {
  options: [],
  error: ''
};

export const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    optionsFetchingSuccess(state, action: PayloadAction<IOptions[]>) {
      state.error = '';
      state.options = action.payload;
    },
    optionsFetchingError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  }
});

export default optionsSlice.reducer;