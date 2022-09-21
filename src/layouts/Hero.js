import React from "react";
import Button from "../components/Button";

function Hero() {
  return (
    <div className="min-h-screen flex items-center relative z-10">
      <div className="container-wrapper flex items-center justify-center">
        <div>
          <div>
            <h2 className="fs-60px leading-1 pl-5vw font-light uppercase">
              Coworking for
            </h2>
            <h1 className="fs-80px font-bold uppercase">Corporate companies</h1>
          </div>
          <div className="flex items-center justify-center space-x-2vw mb-4vw">
            <p className="fs-16px font-light uppercase">
              The perfect step <br /> into the future of{" "}
            </p>
            <h2 className="fs-60px leading-1 font-light uppercase">
              Hybrid work life
            </h2>
          </div>

          <div className="flex items-center justify-center">
            <Button title="Enquire" />
          </div>
        </div>
      </div>

      <img
        src="images/hero-banner.png"
        className="absolute top-0 left-0 w-full h-full -z-50 object-cover select-none pointer-events-none"
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full opacity-70 select-none pointer-events-none -z-40 bg-black"></div>
    </div>
  );
}

export default Hero;
