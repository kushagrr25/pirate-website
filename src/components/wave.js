import React from "react";
import wave1 from "./images/wave1.png";
import wave2 from "./images/wave2.png";
import wave3 from "./images/wave3.png";
import "./wave.css";

function Wave() {
  return (
    <>
      <div id="wavei" style={{ backgroundImage: `url(${wave1})` }}></div>
      <div id="waveii" style={{ backgroundImage: `url(${wave2})` }}></div>
      <div id="waveiii" style={{ backgroundImage: `url(${wave3})` }}></div>
    </>
  );
}

export default Wave;
