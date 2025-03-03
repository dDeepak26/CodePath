import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./pageSlice";
import modalSlice from "./modalSlice";
import problemSlice from "./problemSlice";

const store = configureStore({
  reducer: {
    page: pageSlice,
    modal: modalSlice,
    problems: problemSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
