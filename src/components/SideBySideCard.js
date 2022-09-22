import React from "react";
import { GoQuote } from "react-icons/go";

function SideBySideCard() {
  return (
    <div className="grid grid-cols-2">
      <div>
        <img src="images/card-img.png" className="w-full" alt="" />
      </div>
      <div className="bg-white-gray p-50px grid grid-rows-[1fr_auto]">
        <div>
          <GoQuote className="text-[3vw] mb-1vw text-black fill-black opacity-40" />
          <p className="fs-24px font-light text-black">
            The office is very inviting and just right for a young IT company
            like ours and the facilities provide just the right atmosphere. A
            great place!
          </p>
        </div>
        <div>
          <p className="fs-24px font-light text-black">- Jonathan Sanders</p>
        </div>
      </div>
    </div>
  );
}

export default SideBySideCard;
