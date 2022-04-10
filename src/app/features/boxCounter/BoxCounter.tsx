import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  boxCount: number[];
}

const initialState: CounterState = {
  boxCount: [],
};

export const boxCounterSlice = createSlice({
  name: "boxCounter",
  initialState,
  reducers: {
    increment: (state) => {
      const length = state.boxCount.length;
      if (length < 12) {
        //max 12 boxes
        state.boxCount.push(length + 1);
      }
      // a new box will be created
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.boxCount = [
        ...state.boxCount.filter((value) => value !== action.payload),
      ];
      //the selected box will be eliminated from the array
    },
  },
});

export const { increment, decrement } = boxCounterSlice.actions;

export default boxCounterSlice.reducer;
