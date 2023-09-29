import { configureStore } from "@reduxjs/toolkit";
import approvalReducer from "./approvalSlice";
import missingReducer from "./missingSlice";
import normalMissingReducer from "./NormalMissingSlice";

const appStore = configureStore({
  reducer: {
    approval: approvalReducer,
    missing: missingReducer,
    normalMissing: normalMissingReducer,
  },
});

export default appStore;
