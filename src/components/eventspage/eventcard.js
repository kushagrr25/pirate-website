import "./eventcard.css";
import card from "./card.png";
import leftcard from "./leftcard.png";
import rightcard from "./rightcard.png";
import middlecard from "./middlecard.png";

import { useState } from "react";
function Card(props) {
  const [overlay, setOverlay] = useState(false);

  return (
    <>
      <div
        className="card"
        style={{ backgroundImage: `URL(${card})` }}
        onClick={() => {
          setOverlay(true);
        }}
      >
        {props.eventname}
      </div>
      {overlay && (
        <>
          <div className="background"></div>

          <button
            className="button"
            onClick={() => {
              setOverlay(false);
            }}
          >
            X
          </button>

          <div className="bigcard">
            <img src={leftcard} className="leftcard" alt="Left card" />
            <img src={middlecard} className="middlecard" alt="Middle card" />
            <img src={rightcard} className="rightcard" alt="Right card" />
          </div>
        </>
      )}
    </>
  );
}
export default Card;
