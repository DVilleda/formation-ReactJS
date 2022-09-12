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

function App() {
  const itemList = [1, 4, 7, 9, 345, 2345];
  return (
    <div className="App">
      <Hello></Hello>
      <Title title="La boutique chic" name="Danny"></Title>
      <Description description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"></Description>

      <Toggle></Toggle>
      <Logic boolean={true}></Logic>
      <Logic boolean={false}></Logic>
      <ProductList></ProductList>

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
  );
}

export default App;
