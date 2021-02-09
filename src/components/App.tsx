import React from "react";
import logo from "../assets/g4w@1x.svg";

const App = () => {
  return (
    <>
      <img src={logo} alt="Gamers4War" aria-label="Gamers4War logo" />
      <footer>
        <p>
          &copy; 2021 Gamers4War.com
          <br />
          <a href="https://github.com/seaneoo/g4w">Source code</a>
        </p>
      </footer>
    </>
  );
};

export default App;
