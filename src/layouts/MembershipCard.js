import CapacityCard from "components/CapacityCard";
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

function MembershipCard({ min, max, title, desc }) {
  return (
    <div className="">
      <div className="mb-1_4vw">
        <img
          src="images/hero-banner.png"
          className="w-full object-cover h-[26vw]"
          alt=""
        />
      </div>

      <div className="flex items-center space-x-1_2vw pb-1vw border-b-2 border-white mb-1vw">
        <p className="fs-20px font-light">{title}</p>
        {!min || !max ? null : (
          <CapacityCard
            min={min}
            max={max}
            Icon={() => <BsFillPersonFill className="text-[1em] fill-blue" />}
          />
        )}
      </div>

      <p className="fs-16px font-light">{desc}</p>
    </div>
  );
}

export default MembershipCard;
