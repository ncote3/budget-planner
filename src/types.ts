export interface Account {
  type: "Checking" | "Savings" | "Credit";
  balance: number;
  targetBalance?: number;
  name: string;
}

export interface AccountStatement {
  accountName: string;
  balance: number;
  date: string;
}

export interface AccountEvent {
  date: string;
  name: string;
  id: string;
  amount: number;
  type: "Expense" | "Income";
  accountDebitedName?: string;
  accountCreditedName?: string;
  recurringEndDate?: string;
}

export interface AccountUpdatePayload {
  accountName: string;
  newBalance: number;
  eventName: string;
}
