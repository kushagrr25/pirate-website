import React from "react";
import "./background.css";

function RainEffect() {
  const raindrops = Array.from({ length: 500 });

  return (
    <div className="rain-container">
      {raindrops.map((_, index) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 3;
        const duration = 0.5 + Math.random() * 1.5;

        return (
          <div
            key={index}
            className="raindrop"
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              transform: `rotate(-20deg)`, // 👈 Tilt here
            }}
          ></div>
        );
      })}
    </div>
  );
}

export default RainEffect;
