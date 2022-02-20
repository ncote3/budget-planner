import React, { useState } from "react";
import { AccountStatement } from "../../types";
import { Button, Form, InputGroup } from "react-bootstrap";

interface Props {
  name: string;
  onAdd: Function;
}

const AccountStatementForm = (props: Props) => {
  const { name, onAdd } = props;

  const initialState: AccountStatement = {
    accountName: name,
    balance: 0,
    date: "",
  };

  const [accountStatementForm, updateAccountStatementForm] =
    useState<AccountStatement>(initialState);

  const renderAccountStatementDate = () => {
    const { date } = accountStatementForm;

    return (
      <Form.Group
        onChange={(e: any) =>
          updateAccountStatementForm({
            ...accountStatementForm,
            date: e.target.value,
          })
        }
        className="mb-3"
        controlId="accountStatementFormDate"
      >
        <Form.Label>Account Statement Date</Form.Label>
        <Form.Control value={date} type="date" />
      </Form.Group>
    );
  };

  const renderAccountStatementBalance = () => {
    const { balance } = accountStatementForm;

    return (
      <Form.Group
        onChange={(e: any) =>
          updateAccountStatementForm({
            ...accountStatementForm,
            balance: e.target.value,
          })
        }
        className="mb-3"
        controlId="accountEventFormAmount"
      >
        <Form.Label>Account Statement Balance</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control value={balance} type="number" placeholder="Balance" />
        </InputGroup>
      </Form.Group>
    );
  };

  const handleFormSubmission = (e: any) => {
    e.preventDefault();
    onAdd(accountStatementForm);
    updateAccountStatementForm(initialState);
  };

  const styles = {
    borderRadius: "1%",
    padding: "3px",
    border: "1px solid black",
  };

  return (
    <div style={styles}>
      <h5>{name}</h5>
      <hr />
      <Form>
        {renderAccountStatementDate()}
        {renderAccountStatementBalance()}
        <Button variant="primary" type="submit" onClick={handleFormSubmission}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AccountStatementForm;
