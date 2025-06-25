import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import UserContextProvider from "./context/UserContextProvider";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <SignUp></SignUp>
      <Profile />
    </UserContextProvider>
  );
}

export default App;
