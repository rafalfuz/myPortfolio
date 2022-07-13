import React, { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Card } from "../Card/Card";
import "./AnimatedCard.css";

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 2,
  (x - rect.left - rect.width / 2) / 2,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const AnimatedCard = ({ icon, text }) => {
  const ref = useRef(null);
  const [xys, set] = useState([0, 0, 1]);

  const props = useSpring({ xys });

  return (
    <div className="ccard-main" ref={ref}>
      <animated.div
        className="ccard"
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect();
          set(calc(e.clientX, e.clientY, rect));
        }}
      >
        <Card icon={icon} text={text} />
      </animated.div>
    </div>
  );
};
