import React from "react";
import { Welcome } from "./views/Welcome";
import { Navbar } from "./components/Navbar/Navbar";

import "./App.css";

export const App = () => {
  return (
    <div className="AppWrapper">
      <Navbar/>
      <Welcome />
      <div style={{ height: "200vh" }}></div>
      <div name='sector4'></div>
    </div>
  );
};
//@todo
//make a Logo
//Finish navbar
//install react-scroll
