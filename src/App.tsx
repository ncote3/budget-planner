import React from "react";
import "./App.css";
import NewAccountCreator from "./AccountCreation/Components/NewAccountCreator";
import { useSelector } from "react-redux";
import { selectAccounts } from "./store/Slices/accountSlice";
import AccountEventCreation from "./AccountEvent/Components/AccountEventCreation";

function App() {
  const accounts = useSelector(selectAccounts);

  console.log(accounts);

  const styles = {
    width: "100%",
    margin: "5%",
    display: "flex",
    justifyContent: "space-evenly",
  };

  return (
    <div className="App" style={styles}>
      <NewAccountCreator />
      <AccountEventCreation />
    </div>
  );
}

export default App;
