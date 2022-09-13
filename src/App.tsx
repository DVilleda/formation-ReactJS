import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/hello";
import Title from "./components/Title";
import Description from "./components/Description";
import Loop from "./components/user";
import Toggle from "./components/Toggle";
import Logic from "./components/logic";
import ProductList from "./components/ProductList";
import Form from "./components/Form";

import { AuthContext, LogIn, LogOut } from "./components/context/authContext";
import { useState } from "react";

import MouseTracker from "./components/Cat";

function App() {
  const itemList = [1, 4, 7, 9, 345, 2345];
  const [auth, setAuth] = useState(false);
  const login = () => {
    setAuth(true);
  };

  const logout = () => {
    setAuth(false);
  };
  return (
    <React.Fragment>
      <AuthContext.Provider
        value={{ auth: auth, login: login, logout: logout }}
      >
        <div className="App">
          <p> {auth ? "Logged In" : "Have to login"}</p>
          <LogIn />
          <LogOut />
          <Title title="La boutique chic" name="Danny"></Title>
          <Description description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"></Description>

          <Form></Form>

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
