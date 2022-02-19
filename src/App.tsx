import React from "react";
import "./App.css";
import NewAccountCreator from "./AccountCreation/Components/NewAccountCreator";
import { useSelector } from "react-redux";
import { selectAccounts } from "./store/Slices/accountSlice";

function App() {
  const accounts = useSelector(selectAccounts);

  console.log(accounts);

  return (
    <div className="App">
      <NewAccountCreator />
    </div>
  );
}

export default App;
