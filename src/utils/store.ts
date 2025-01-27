import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./pageSlice";
import modalSlice from "./modalSlice";

const store = configureStore({
  reducer: {
    page: pageSlice,
    modal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
