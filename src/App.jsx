import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./components/Profile";
import Account from "./components/Account";

function App() {
  return (
    <>
      <Profile />
      <Account />
    </>
  );
}

export default App;
