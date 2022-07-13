import React from "react";
import Particles from "react-tsparticles";
import { particlesOption } from "./particlesConfig";
import { SiGithub, SiLinkedin, SiReplit } from "react-icons/si";

import "./Welcome.css";

export const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome-body">
        <Particles id="tsparticles" options={particlesOption} />
        <div className="container">
          <h1 className="name">Rafał Fuz</h1>
          <h2 className="profession">FRONT-END WEB DEVELOPER</h2>
          <ul className="mediaLinkList">
            <a
              href="https://github.com/rafalfuz"
              target="blank"
              rel="noopener noreferrer"
              className="mediaLink"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rafał-fuz-4855b722b/"
              target="blank"
              rel="noopener noreferrer"
              className="mediaLink"
            >
              <SiLinkedin />
            </a>
            <a
              href="https://replit.com/@RafalFuz"
              target="blank"
              rel="noopener noreferrer"
              className="mediaLink"
            >
              <SiReplit />
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
};
