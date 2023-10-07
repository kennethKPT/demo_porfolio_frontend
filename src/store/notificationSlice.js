import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 1, show: false };

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    increment(state) {
      state.count++; //Can modify state directly becasue of redux toolkit
    },
    decrement(state) {
      if (state.count <= 1) {
        state.count = 1;
      } else {
        state.count--;
      }
    },
    increase(state, action) {
      state.count += action.payload;
    },
    toggleCounter(state) {
      state.show = !state.show;
    },
    reset(state) {
      state.count = initialState.count;
      state.show = initialState.show;
    },
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice;
