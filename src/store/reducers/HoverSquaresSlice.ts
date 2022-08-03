import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHoverSquares } from '../../models/IHoverSquares';

const initialState: IHoverSquares = {
  hoverSquares: [],
};

export const hoverSquaresSlice = createSlice({
  name: 'hoverSquares',
  initialState,
  reducers: {
    setItem(state, action: PayloadAction<number>) {
      state.hoverSquares = [...state.hoverSquares, action.payload]
    },
    removeItem(state, action: PayloadAction<number>) {
      state.hoverSquares = [...state.hoverSquares].filter(item => item !== action.payload)
    }
  }
});

export default hoverSquaresSlice.reducer;