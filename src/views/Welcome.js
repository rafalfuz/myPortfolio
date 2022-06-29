import React from "react";
import Particles from "react-tsparticles";
import { particlesOption } from "./particlesConfig";

import "./Welcome.css";

export const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome-body">
        <Particles id="tsparticles" options={particlesOption} />
        <div className="container">
          <h1 className="name">rafalfuz.pl</h1>
          <button className="btnClick" onClick={() => console.log("Click")}>
            Click
          </button>
        </div>
      </div>
    </section>
  );
};
