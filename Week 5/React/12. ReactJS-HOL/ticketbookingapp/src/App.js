import React, { useState } from "react";

import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  let button;

  if (isLoggedIn) {
    button = <LogoutButton onClick={logout} />;
  } else {
    button = <LoginButton onClick={login} />;
  }

  return (
    <div style={{ margin: "40px" }}>

      <Greeting isLoggedIn={isLoggedIn} />

      <br />

      {button}

    </div>
  );
}

export default App;