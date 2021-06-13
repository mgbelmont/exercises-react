import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuHamburger from "./screens/Menu";

export default function App() {
  return (
    <Router>
      <div className="app h-100">
        <Switch>
          <Route exact path="/menu">
            <MenuHamburger />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
