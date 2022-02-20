import React from "react";
import "./App.css";
import NewAccountCreator from "./AccountCreation/Components/NewAccountCreator";
import { useSelector } from "react-redux";
import { selectAccounts } from "./store/Slices/accountSlice";

function App() {
  const accounts = useSelector(selectAccounts);

  console.log(accounts);

  return (
    <div className="App" style={{ width: "50%", margin: "25%" }}>
      <NewAccountCreator />
    </div>
  );
}

export default App;
