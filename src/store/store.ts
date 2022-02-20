import { configureStore } from "@reduxjs/toolkit";

import accountEventSlice from "./Slices/accountEventSlice";
import accountSlice from "./Slices/accountSlice";
import accountStatementSlice from "./Slices/accountStatementSlice";

export const store = configureStore({
  reducer: {
    account: accountSlice,
    accountEvent: accountEventSlice,
    accountStatement: accountStatementSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
