import React from "react";
import { Welcome } from "./views/Welcome";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./views/AboutSection/AboutSection";
import { Abillity } from "./views/Abillity/Abillity";
import { Credentials } from "./views/Credentials/Credentials";
import { Contact } from "./views/Contact/Contact";
import { Footbar } from "./Footbar/Footbar";

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
        <Contact />
      </main>
      <footer>
        <Footbar />
      </footer>
    </div>
  );
};
//@todo
//make a Logo
//Finish navbar
//install react-scroll
