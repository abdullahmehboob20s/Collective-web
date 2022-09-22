import React from "react";
import Marquee from "react-fast-marquee";

function Partners() {
  return (
    <Marquee className="flex" gradientColor={[39, 39, 39]} speed={80}>
      <div className="flex-1 flex items-center justify-center">
        <img src="images/empreve.png" className="w-[18vw]" alt="" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img src="images/urgo.png" className="w-[9vw]" alt="" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img src="images/nespresso-logo.png" className="w-[18vw]" alt="" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img src="images/rockwell.png" className="w-[13vw]" alt="" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img src="images/urgo.png" className="w-[9vw]" alt="" />
      </div>
    </Marquee>
  );
}

export default Partners;
