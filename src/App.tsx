import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import AppContainer from "./components/AppContainer";
import MenuBars from "./components/Menubar/MenuBars";
import { routeDefinitions } from "./Pages/RouteDefinition";
import Home from "./Pages/Home";
import Thoughts from "./Pages/Thoughts";
import Contact from "./Pages/Contact";
import Achievements from "./Pages/Achievements";
import { ThemeProvider } from "styled-components";
import { SiteTheme } from "./SiteTheme";

function App() {
  return (
    <ThemeProvider theme={SiteTheme}>
      <Router>
        <MenuBars menuItems={routeDefinitions} />
        <AppContainer>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/thoughts" exact component={Thoughts} />
            <Route path="/achievements" exact component={Achievements} />
          </Switch>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
