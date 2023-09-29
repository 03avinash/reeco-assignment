import { createSlice } from "@reduxjs/toolkit";

const approvalSlice = createSlice({
  name: "approval",
  initialState: {
    selectedItemId: [],
  },
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItemId.push(action.payload);
    },
  },
});

export const { setSelectedItem } = approvalSlice.actions;
export default approvalSlice.reducer;
