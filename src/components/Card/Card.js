import React from "react";
import "./Card.css";

export const Card = ({ icon, text }) => {
  return (
    <div className="card">
      <div className="cardWrapper">
        <div className="cardIcon">{icon}</div>
        <div className="cardName">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

//https://codesandbox.io/s/react-spring-config-x1vjb?from-embed=&file=/src/App.js
