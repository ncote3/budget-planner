import React, { useState } from "react";
import { AccountStatement } from "../../types";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectAccountNames } from "../../store/Slices/accountSlice";
import { addAccountStatements } from "../../store/Slices/accountStatementSlice";
import AccountStatementForm from "../Subcomponents/AccountStatementForm";

const AccountStatementReporter = () => {
  const initialState: AccountStatement[] = [];

  const [accountStatementForms, updateAccountStatementForms] =
    useState<AccountStatement[]>(initialState);

  const dispatch = useDispatch();
  const availableAccountNames = useSelector(selectAccountNames);

  const handleFormSubmission = (e: any) => {
    e.preventDefault();
    dispatch(addAccountStatements(accountStatementForms));
    updateAccountStatementForms(initialState);
  };

  const renderAccountStatementForms = () => {
    return availableAccountNames.map((accountName) => {
      return (
        <AccountStatementForm
          name={accountName}
          onAdd={updateAccountStatementForms}
        />
      );
    });
  };

  const styles = {
    borderRadius: "1%",
    padding: "1vw",
    border: "1px solid black",
    width: "60%",
  };

  return (
    <div style={styles}>
      <h4>Account Statement Reporter</h4>
      <hr />
      <div>{renderAccountStatementForms()}</div>

      <Button variant="primary" type="submit" onClick={handleFormSubmission}>
        Submit
      </Button>
    </div>
  );
};

export default AccountStatementReporter;
