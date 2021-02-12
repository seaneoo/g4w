import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "~/components/header";
import "~/styles/index.scss";
import { Home } from "./pages";

const App = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (scrollY > 0 && !document.body.classList.contains("scrolled"))
      document.body.classList.add("scrolled");
    else if (scrollY === 0 && document.body.classList.contains("scrolled"))
      document.body.classList.remove("scrolled");
  };

  return (
    <Router>
      <Header />

      <main>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
