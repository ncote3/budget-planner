import React from "react";
import "./App.css";
import NewAccountCreator from "./AccountCreation/Components/NewAccountCreator";
import { useSelector } from "react-redux";
import { selectAccounts } from "./store/Slices/accountSlice";
import AccountEventCreation from "./AccountEvent/Components/AccountEventCreation";
import AccountStatementReporter from "./AccountEvent/Components/AccountStatementReporter";

function App() {
  const accounts = useSelector(selectAccounts);

  console.log(accounts);

  const styles: React.CSSProperties = {
    width: "100%",
    margin: "5%",
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    rowGap: "15px",
  };

  return (
    <div className="App" style={styles}>
      <NewAccountCreator />
      <AccountEventCreation />
      <AccountStatementReporter />
    </div>
  );
}

export default App;
