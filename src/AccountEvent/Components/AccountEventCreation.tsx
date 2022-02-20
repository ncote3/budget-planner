import React, { useState } from "react";
import { AccountEvent } from "../../types";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addAccountEvent } from "../../store/Slices/accountEventSlice";

const AccountEventCreation = () => {
  const [accountEventForm, updateAccountEventForm] = useState<AccountEvent>({
    date: "",
    name: "",
    id: "",
    amount: 0,
    type: "Expense",
  });

  const dispatch = useDispatch();

  const renderAccountEventName = () => {
    const { name } = accountEventForm;

    return (
      <Form.Group
        onChange={(e: any) =>
          updateAccountEventForm({
            ...accountEventForm,
            name: e.target.value,
          })
        }
        className="mb-3"
        controlId="accountFormName"
      >
        <Form.Label>Account Event Name</Form.Label>
        <Form.Control
          value={name}
          type="text"
          placeholder="Enter Account Event Name"
        />
      </Form.Group>
    );
  };

  const renderAccountEventDate = () => {
    const { date } = accountEventForm;

    return (
      <Form.Group
        onChange={(e: any) =>
          updateAccountEventForm({
            ...accountEventForm,
            date: e.target.value,
          })
        }
        className="mb-3"
        controlId="accountEventFormDate"
      >
        <Form.Label>Account Event Date</Form.Label>
        <Form.Control value={date} type="date" />
      </Form.Group>
    );
  };

  const renderAccountEventAmount = () => {
    const { amount } = accountEventForm;

    return (
      <Form.Group
        onChange={(e: any) =>
          updateAccountEventForm({
            ...accountEventForm,
            amount: e.target.value,
          })
        }
        className="mb-3"
        controlId="accountEventFormAmount"
      >
        <Form.Label>Account Event Amount</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control value={amount} type="number" placeholder="Amount" />
        </InputGroup>
      </Form.Group>
    );
  };

  const renderAccountEventType = () => {
    const { type } = accountEventForm;

    return (
      <Form.Group
        onChange={(e: any) =>
          updateAccountEventForm({
            ...accountEventForm,
            type: e.target.value,
          })
        }
        className="mb-3"
        controlId="accountFormType"
      >
        <Form.Select value={type}>
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </Form.Select>
      </Form.Group>
    );
  };

  const handleFormSubmission = (e: any) => {
    e.preventDefault();
    dispatch(addAccountEvent(accountEventForm));
  };

  const styles = {
    borderRadius: "1%",
    padding: "1vw",
    border: "1px solid black",
    width: "30%",
  };

  return (
    <Form style={styles}>
      {renderAccountEventName()}
      {renderAccountEventDate()}
      {renderAccountEventAmount()}
      {renderAccountEventType()}

      <Button variant="primary" type="submit" onClick={handleFormSubmission}>
        Submit
      </Button>
    </Form>
  );
};

export default AccountEventCreation;
