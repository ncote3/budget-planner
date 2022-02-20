import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccountEvent } from "../../types";
import { RootState } from "../store";

interface AccountEventState {
  accountEvents: AccountEvent[];
}

const initialState: AccountEventState = {
  accountEvents: [],
};

export const accountEventSlice = createSlice({
  name: "accountEvent",
  initialState,
  reducers: {
    addAccountEvent: (state, action: PayloadAction<AccountEvent>) => {
      const { payload: newAccountEvent } = action;

      state.accountEvents = [...state.accountEvents, newAccountEvent];
    },
  },
});

export const { addAccountEvent } = accountEventSlice.actions;

export const selectAccountEvents = (state: RootState) =>
  state.accountEvent.accountEvents;
export const selectAccountEventNames = (state: RootState) => {
  const { accountEvent } = state;
  const { accountEvents } = accountEvent;

  return accountEvents.map((accountEvent) => accountEvent.name);
};

export default accountEventSlice.reducer;
