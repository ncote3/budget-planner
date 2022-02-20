import React, { useState } from "react";
import { Account } from "../../types";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addAccount } from "../../store/Slices/accountSlice";

const NewAccountCreator = () => {
  const initialAccountFormState: Account = {
    type: "Checking",
    balance: 0,
    name: "",
  };
  const [accountForm, updateAccountForm] = useState<Account>(
    initialAccountFormState
  );

  const dispatch = useDispatch();

  const renderAccountName = () => {
    const { name } = accountForm;

    return (
      <Form.Group
        onChange={(e: any) =>
          updateAccountForm({
            ...accountForm,
            name: e.target.value,
          })
        }
        className="mb-3"
        controlId="accountFormName"
      >
        <Form.Label>Account Name</Form.Label>
        <Form.Control
          value={name}
          type="text"
          placeholder="Enter Account Name"
        />
      </Form.Group>
    );
  };

  const renderAccountBalance = () => {
    const { balance } = accountForm;

    return (
      <Form.Group
        onChange={(e: any) =>
          updateAccountForm({
            ...accountForm,
            balance: e.target.value,
          })
        }
        className="mb-3"
        controlId="accountFormBalance"
      >
        <Form.Label>Account Balance</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            value={balance}
            type="number"
            placeholder="Account Balance"
          />
        </InputGroup>
      </Form.Group>
    );
  };

  const renderTargetAccountBalance = () => {
    const { targetBalance } = accountForm;

    return (
      <Form.Group
        onChange={(e: any) =>
          updateAccountForm({
            ...accountForm,
            targetBalance: e.target.value,
          })
        }
        className="mb-3"
        controlId="accountFormTargetBalance"
      >
        <Form.Label>Account Target Balance</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            value={targetBalance}
            type="number"
            placeholder="Account Target Balance"
          />
        </InputGroup>
      </Form.Group>
    );
  };

  const renderAccountType = () => {
    const { type } = accountForm;

    return (
      <Form.Group
        onChange={(e: any) =>
          updateAccountForm({
            ...accountForm,
            type: e.target.value,
          })
        }
        className="mb-3"
        controlId="accountFormType"
      >
        <Form.Label>Account Type</Form.Label>
        <Form.Select value={type}>
          <option value="Checking">Checking</option>
          <option value="Savings">Savings</option>
          <option value="Credit">Credit</option>
        </Form.Select>
      </Form.Group>
    );
  };

  const handleFormSubmission = (e: any) => {
    e.preventDefault();
    dispatch(addAccount(accountForm));
  };

  const styles = {
    borderRadius: "1%",
    padding: "1vw",
    border: "1px solid black",
    width: "35%",
  };

  return (
    <Form style={styles}>
      {renderAccountName()}
      {renderAccountBalance()}
      {renderTargetAccountBalance()}
      {renderAccountType()}
      <Button variant="primary" type="submit" onClick={handleFormSubmission}>
        Submit
      </Button>
    </Form>
  );
};

export default NewAccountCreator;
