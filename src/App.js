import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import Main from "./pages/main";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Main></Main>
    </div>
  );
}

export default App;
