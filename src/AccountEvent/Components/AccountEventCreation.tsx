import React, { useState } from "react";
import { AccountEvent } from "../../types";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addAccountEvent } from "../../store/Slices/accountEventSlice";
import { selectAccountNames } from "../../store/Slices/accountSlice";

const AccountEventCreation = () => {
  const initialAccountEventFormState: AccountEvent = {
    date: "",
    name: "",
    id: "",
    amount: 0,
    type: "Expense",
    recurringFrequency: "",
  };

  const [accountEventForm, updateAccountEventForm] = useState<AccountEvent>(
    initialAccountEventFormState
  );

  const dispatch = useDispatch();
  const availableAccountNames = useSelector(selectAccountNames);

  const renderName = () => {
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
        <Form.Control value={name} type="text" />
      </Form.Group>
    );
  };

  const renderDate = () => {
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
        <Form.Label>Date</Form.Label>
        <Form.Control value={date} type="date" />
      </Form.Group>
    );
  };

  const renderAmount = () => {
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
        <Form.Label>Amount</Form.Label>
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
        controlId="accountEventFormType"
      >
        <Form.Label>Account Event Type</Form.Label>
        <Form.Select value={type}>
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </Form.Select>
      </Form.Group>
    );
  };

  const generateAccountOptions = () =>
    availableAccountNames.map((accountName) => (
      <option value={accountName}>{accountName}</option>
    ));

  const renderAccountDebited = () => {
    const { accountDebitedName = "" } = accountEventForm;

    return (
      <Form.Group
        onChange={(e: any) =>
          updateAccountEventForm({
            ...accountEventForm,
            accountDebitedName: e.target.value,
          })
        }
        className="mb-3"
        controlId="accountEventFormAccountDebited"
      >
        <Form.Label>Account Debited</Form.Label>
        <Form.Select value={accountDebitedName}>
          {generateAccountOptions()}
        </Form.Select>
      </Form.Group>
    );
  };

  const renderAccountCredited = () => {
    const { accountCreditedName = "" } = accountEventForm;

    return (
      <Form.Group
        onChange={(e: any) =>
          updateAccountEventForm({
            ...accountEventForm,
            accountCreditedName: e.target.value,
          })
        }
        className="mb-3"
        controlId="accountEventFormAccountCredited"
      >
        <Form.Label>Account Credited</Form.Label>
        <Form.Select value={accountCreditedName}>
          {generateAccountOptions()}
        </Form.Select>
      </Form.Group>
    );
  };

  const renderRecurringFrequency = () => {
    const { recurringFrequency } = accountEventForm;

    return (
      <Form.Group
        onChange={(e: any) =>
          updateAccountEventForm({
            ...accountEventForm,
            recurringFrequency: e.target.value,
          })
        }
        className="mb-3"
        controlId="accountEventFormRecurringFrequency"
      >
        <Form.Label>Recurring Frequency</Form.Label>
        <Form.Select value={recurringFrequency}>
          <option value=""></option>
          <option value="Monthly">Monthly</option>
          <option value="Weekly">Weekly</option>
        </Form.Select>
      </Form.Group>
    );
  };

  const renderTotalRecurringTimes = () => {
    const { recurringTotalTimes = 0 } = accountEventForm;

    return (
      <Form.Group
        onChange={(e: any) =>
          updateAccountEventForm({
            ...accountEventForm,
            recurringTotalTimes: e.target.value,
          })
        }
        className="mb-3"
        controlId="accountEventFormRecurringTotalTimes"
      >
        <Form.Label>Total Recurring Times</Form.Label>
        <Form.Control value={recurringTotalTimes} type="number" />
      </Form.Group>
    );
  };

  const handleFormSubmission = (e: any) => {
    e.preventDefault();
    dispatch(addAccountEvent(accountEventForm));
    updateAccountEventForm(initialAccountEventFormState);
  };

  const styles = {
    borderRadius: "1%",
    padding: "1vw",
    border: "1px solid black",
    width: "60%",
  };

  return (
    <div style={styles}>
      <h4>Account Event Creation</h4>
      <hr />
      <Form>
        <Row>
          <Col>{renderName()}</Col>
          <Col>{renderDate()}</Col>
        </Row>
        <Row>
          <Col>{renderAmount()}</Col>
          <Col>{renderAccountEventType()}</Col>
        </Row>
        <Row>
          <Col>{renderAccountDebited()}</Col>
          <Col>{renderAccountCredited()}</Col>
        </Row>
        <Row>
          <Col>{renderRecurringFrequency()}</Col>
          <Col>{renderTotalRecurringTimes()}</Col>
        </Row>

        <Button variant="primary" type="submit" onClick={handleFormSubmission}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AccountEventCreation;
