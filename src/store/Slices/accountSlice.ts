import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Account, AccountUpdatePayload } from "../../types";
import { RootState } from "../store";

interface AccountState {
  accounts: Account[];
}

const initialState: AccountState = {
  accounts: [],
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    addAccount: (state, action: PayloadAction<Account>) => {
      const { payload: newAccount } = action;

      state.accounts = [...state.accounts, newAccount];
    },
    updateAccountBalance: (
      state,
      action: PayloadAction<AccountUpdatePayload>
    ) => {
      const { payload } = action;
      const { newBalance, accountName } = payload;

      const accountToUpdate = state.accounts.filter(
        (account) => account.name === accountName
      );

      const updatedAccount = {
        ...accountToUpdate,
        balance: newBalance,
      };

      state.accounts = [...state.accounts, ...updatedAccount];
    },
  },
});

export const { updateAccountBalance, addAccount } = accountSlice.actions;

export const selectAccounts = (state: RootState) => state.account.accounts;

export default accountSlice.reducer;
