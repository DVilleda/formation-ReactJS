import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form/Form";
import MouseTracker from "./components/Exemples/Cat";
import Toggle from "./components/Exemples/Toggle";
import Loop from "./components/Exemples/user";
import Error404 from "./components/Error404";

import { Routes, Route, Link, NavLink } from "react-router-dom";

import { AuthContext, LogIn, LogOut } from "./components/context/authContext";
import { useState } from "react";

import Home from "./views/Home";
import Api from "./views/api";
import Login from "./views/login";

function App() {
  const itemList = [1, 4, 7, 9, 345, 2345];
  const [auth, setAuth] = useState(false);

  /*
  Ce hook permet de sauvegarder le context dans un fichier local et le recharger
  quand on ouvre l'application.
  */
  useEffect(() => {
    var isTrueSet = (localStorage.getItem("auth") === 'true');
    console.log(localStorage.getItem("auth"));
    setAuth(isTrueSet);
  }, []);

  const login = () => {
    localStorage.setItem("auth", "true");
    setAuth(true);
  };

  const logout = () => {
    localStorage.setItem("auth", "false");
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
              to="/api"
              style={({ isActive }) => ({ color: isActive ? "green" : "red" })}
            >
              API Calls
            </NavLink>
            /
            <NavLink
              to="/login"
              style={({ isActive }) => ({ color: isActive ? "green" : "red" })}
            >
              Login
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
          <p> {auth ? "Logged In" : "Have to login"}</p>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Home />} />
            <Route path="/api" element={<Api />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tracker" element={<MouseTracker />} />
            <Route path="/toggle" element={<Toggle />}></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route path="/list/:id" element={<Loop></Loop>}></Route>
          </Routes>

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
