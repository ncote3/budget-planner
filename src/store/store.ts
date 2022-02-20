import { configureStore } from "@reduxjs/toolkit";

import accountEventSlice from "./Slices/accountEventSlice";
import accountSlice from "./Slices/accountSlice";

export const store = configureStore({
  reducer: {
    account: accountSlice,
    accountEvent: accountEventSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
