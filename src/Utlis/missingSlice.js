import { createSlice } from "@reduxjs/toolkit";

const missingSlice = createSlice({
  name: "missing",
  initialState: {
    missingItemId: [],
  },
  reducers: {
    setMissingItem: (state, action) => {
      state.missingItemId.push(action.payload);
    },
  },
});

export const { setMissingItem } = missingSlice.actions;
export default missingSlice.reducer;
