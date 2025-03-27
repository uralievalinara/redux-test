// slices/counterSlices.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    addValue: (state, action) => {
      state.count += Number(action.payload);
    },
  },
});

export const { increment, decrement, incrementByThree, addValue } = counterSlice.actions;

export default counterSlice.reducer;