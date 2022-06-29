import React from "react";
import { Welcome } from "./views/Welcome";
import { Navbar } from "./components/Navbar/Navbar";

import "./App.css";

export const App = () => {
  return (
    <>
      <Navbar />
      <Welcome />
      <div
        style={{
          height: "150vh",
          backgroundColor: "royalblue",
          color: "white",
        }}
      >
        Secton3
      </div>
    </>
  );
};
//@todo
//make a Logo
//Finish navbar
//install react-scroll
