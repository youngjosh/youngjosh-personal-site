import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routes from "./components/Routes";
import ContentContainer from "./components/ContentContainer";
import MenuBars from "./components/MenuBars";

function App() {
  return (
    <ContentContainer>
      <Router>
        <MenuBars />
        <Routes />
      </Router>
    </ContentContainer>
  );
}

export default App;
