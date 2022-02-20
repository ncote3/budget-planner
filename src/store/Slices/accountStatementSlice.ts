import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccountStatement } from "../../types";
import { RootState } from "../store";

interface AccountStatementState {
  accountStatements: AccountStatement[];
}

const initialState: AccountStatementState = {
  accountStatements: [],
};

export const accountStatementSlice = createSlice({
  name: "accountStatement",
  initialState,
  reducers: {
    addAccountStatements: (
      state,
      action: PayloadAction<AccountStatement[]>
    ) => {
      const { payload: newAccountStatements } = action;

      state.accountStatements = [
        ...state.accountStatements,
        ...newAccountStatements,
      ];
    },
  },
});

export const { addAccountStatements } = accountStatementSlice.actions;

export const selectAccountStatements = (state: RootState) =>
  state.accountStatement.accountStatements;

export default accountStatementSlice.reducer;
