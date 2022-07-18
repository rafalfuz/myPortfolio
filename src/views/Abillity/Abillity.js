import React from "react";
import { AnimatedCard } from "../../components/AnimatedCard/AnimatedCard";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaSass,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiJavascript, SiRedux, SiStyledcomponents } from "react-icons/si";

import "./Abillity.css";

export const Abillity = () => {
  return (
    <section className="abillitySectionWrapper" name="abillitiesSection">
      <h3 className="abillityTitle">Umiejętności</h3>
      <div className="abillitiesWrapper">
        <AnimatedCard icon={<FaHtml5 />} text="HTML" />
        <AnimatedCard icon={<FaCss3 />} text="CSS" />
        <AnimatedCard icon={<SiJavascript />} text="JavaScript" />
        <AnimatedCard icon={<FaNodeJs />} text="Node" />
        <AnimatedCard icon={<FaReact />} text="React" />
        <AnimatedCard icon={<SiRedux />} text="Redux" />
        <AnimatedCard icon={<FaSass />} text="Sass" />
        <AnimatedCard icon={<SiStyledcomponents />} text="Styled-components" />
        <AnimatedCard icon={<FaGitAlt />} text="Git" />
        <AnimatedCard icon={<FaGithub />} text="GitHub" />
      </div>
    </section>
  );
};
