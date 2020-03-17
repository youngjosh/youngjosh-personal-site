import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import AppContainer from "./components/AppContainer";
import MenuBars from "./components/MenuBars";
import { routeDefinitions } from "./Pages/RouteDefinition";
import Home from "./Pages/Home";
import Thoughts from "./Pages/Thoughts";
import Contact from "./Pages/Contact";
import Achievements from "./Pages/Achievements";

function App() {
  return (
    <AppContainer>
      <Router>
        <MenuBars menuItems={routeDefinitions} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/thoughts" exact component={Thoughts} />
          <Route path="/achievements" exact component={Achievements} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
