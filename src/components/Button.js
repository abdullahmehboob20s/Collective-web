import React from "react";

function Button({ title }) {
  return (
    <button className="fs-16px font-normal border-[1px] border-white rounded-full py-1vw px-2_8vw leading-1">
      {title}
    </button>
  );
}

export default Button;
