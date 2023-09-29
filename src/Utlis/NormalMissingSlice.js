import { createSlice } from "@reduxjs/toolkit";

const normalMissingSlice = createSlice({
  name: "normalMissing",
  initialState: {
    missingNormalItem: [],
  },
  reducers: {
    setNormalMissingItem: (state, action) => {
      state.missingNormalItem.push(action.payload);
    },
  },
});

export const { setNormalMissingItem } = normalMissingSlice.actions;
export default normalMissingSlice.reducer;
