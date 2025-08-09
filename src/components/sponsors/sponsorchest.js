import "./sponsorchest.css";
import chesttop from "./box1.png";
import chestbottom from "./box2.png";
import coin from "./coin.png";
import coin2 from "./coin 2.png";
import React from "react";
import scene from "./scene.png";
import lefttrees from "./lefttrees.png";
import righttrees from "./righttrees.png";
import chest from "./chest.png";
import glow from "./glow.png";

function Chest() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="chest">
        <img
          className="coin"
          src={coin}
          alt="coin"
          onClick={() => {
            setOpen(true);
          }}
        />
        <img className="chesttop" src={chesttop} alt="chesttop" />
        <img className="chestbottom" src={chestbottom} alt="chestbottom" />
      </div>

      {/* {open && (
        <div className="island" style={{ backgroundImage: `url(${scene})` }}>
          <img className="lefttrees" src={lefttrees} alt="chesttop" />
          <img className="righttrees" src={righttrees} alt="chesttop" />
          <div className="chestbox">
            <img className="chest1" src={chest} alt="chest" />
            <img className="glow" src={glow} alt="glow" />
          </div>
          <button
            className="button "
            onClick={() => {
              setOpen(false);
            }}
          >
            X
          </button>
        </div>
      )} */}
    </>
  );
}
export default Chest;
