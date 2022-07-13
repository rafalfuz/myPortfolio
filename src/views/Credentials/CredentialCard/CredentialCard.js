import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import { FrontCardView } from "./frontView";
import { BackCardView } from "./backView";

import "./CredentialCard.css";

export const CredentialCard = ({ title, publisher, year, link }) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <>
      <a.div
        onClick={() => set((state) => !state)}
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
        className="credentialCardWrapper front"
      >
        <FrontCardView title={title} publisher={publisher} year={year} />
      </a.div>
      <a.div
        onClick={() => set((state) => !state)}
        style={{
          opacity,
          transform,
          rotateX: "180deg",
        }}
        className="credentialCardWrapper back"
      >
        <BackCardView link={link} />
      </a.div>
    </>
  );
};
