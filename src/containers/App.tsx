import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "~/components/header";
import "~/styles/index.scss";

const App = () => {
  return (
    <Router>
      <Header></Header>

      <main>
        <Switch>
          <Route path="/">{/* */}</Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
