export interface Account {
  type: "Checking" | "Savings" | "Credit";
  balance: number;
  targetBalance?: number;
  name: string;
}

export interface RecurringEvent {
  date: string;
  name: string;
  id: string;
  amount: number;
  type: "Bill" | "Income";
  accountDebited?: Account;
  accountCredited?: Account;
}

export interface AccountUpdatePayload {
  accountName: string;
  newBalance: number;
  eventName: string;
}
