import React from "react";
import "./App.css";
import { RecurringEvent } from "../../types";

interface Props {
  accountEvent: RecurringEvent;
}

const AccountEvent = (props: Props) => {
  const { accountEvent } = props;
  const { date, name, amount, type, accountCredited, accountDebited } =
    accountEvent;

  const renderAccountCredited = () => {
    let accountCreditedElement = null;

    if (accountCredited) {
      const {
        type: creditedAccountType,
        balance: creditedAccountBalance,
        name: creditedAccountName,
      } = accountCredited;

      const balanceAfterTransaction = creditedAccountBalance + amount;

      accountCreditedElement = (
        <div className="accountCredited">
          <div>{creditedAccountName}</div>
          <div>
            <span>{creditedAccountBalance}</span>
            <span>{"->"}</span>
            <span> {balanceAfterTransaction}</span>
          </div>
          <div>{creditedAccountType}</div>
        </div>
      );
    }

    return accountCreditedElement;
  };

  const renderAccountDebited = () => {
    let accountDebitedElement = null;

    if (accountDebited) {
      const {
        type: debitedAccountType,
        balance: debitedAccountBalance,
        name: debitedAccountName,
      } = accountDebited;

      const balanceAfterTransaction = debitedAccountBalance - amount;

      accountDebitedElement = (
        <div className="accountDebited">
          <div>{debitedAccountName}</div>
          <div>
            <span>{debitedAccountBalance}</span>
            <span>{"->"}</span>
            <span> {balanceAfterTransaction}</span>
          </div>
          <div>{debitedAccountType}</div>
        </div>
      );
    }

    return accountDebitedElement;
  };

  return (
    <div className="AccountEventContainer">
      <div className="date">{date}</div>
      <div className="header">
        <div className="name">{name}</div>
        <div className="amount">{amount}</div>
        <div className="type">{type}</div>
      </div>
      <div className="content">
        {renderAccountDebited()}
        {renderAccountCredited()}
      </div>
    </div>
  );
};

export default AccountEvent;
