import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Description from "./components/Description";
import Form from "./components/Form";
import MouseTracker from "./components/Cat";
import Toggle from "./components/Toggle";
import Loop from "./components/user";
import Hello from "./components/hello";

import { Routes, Route, Link, NavLink } from "react-router-dom";

import { AuthContext, LogIn, LogOut } from "./components/context/authContext";
import { useState } from "react";

import ProductList from "./components/http/httpreq";
import Http from "./components/http/httpreq2";
import Http2 from "./components/http/httpreq3";

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
          <nav>
            <NavLink
              to="/"
              style={({ isActive }) => ({ color: isActive ? "green" : "red" })}
            >
              Home
            </NavLink>
            /
            <NavLink
              to="/tracker"
              style={({ isActive }) => ({ color: isActive ? "green" : "red" })}
            >
              Tracker
            </NavLink>
            /
            <NavLink
              to="/toggle"
              style={({ isActive }) => ({ color: isActive ? "green" : "red" })}
            >
              Toggle
            </NavLink>
            /
            <NavLink
              to="/form"
              style={({ isActive }) => ({ color: isActive ? "green" : "red" })}
            >
              Form
            </NavLink>
            /
          </nav>
          <Routes>
            <Route path="*" element={<Hello />} />
            <Route path="/" element={<Title />} />
            <Route path="/tracker" element={<MouseTracker />} />
            <Route path="/toggle" element={<Toggle />}></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route path="/list/:id" element={<Loop></Loop>}></Route>
          </Routes>
          <Http></Http>
          <Http2></Http2>

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
