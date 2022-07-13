import React from "react";
import { Welcome } from "./views/Welcome";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./views/AboutSection/AboutSection";
import { Abillity } from "./views/Abillity/Abillity";
import { Credentials } from "./views/Credentials/Credentials";
import { Form } from "./views/Form/Form";

import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <Welcome />
        <About />
        <Abillity />
        <Credentials />
      </main>
    </div>
  );
};
//@todo
//make a Logo
//Finish navbar
//install react-scroll
