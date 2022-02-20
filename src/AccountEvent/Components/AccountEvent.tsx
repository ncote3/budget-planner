import React from "react";
import "./App.css";
import { AccountEvent } from "../../types";

interface Props {
  accountEvent: AccountEvent;
}

const AccountEvent = (props: Props) => {
  const { accountEvent } = props;
  const { date, name, amount, type } = accountEvent;

  return (
    <div className="AccountEventContainer">
      <div className="date">{date}</div>
      <div className="header">
        <div className="name">{name}</div>
        <div className="amount">{amount}</div>
        <div className="type">{type}</div>
      </div>
      <div className="content">
        {/* {renderAccountDebited()}
        {renderAccountCredited()} */}
      </div>
    </div>
  );
};

export default AccountEvent;
