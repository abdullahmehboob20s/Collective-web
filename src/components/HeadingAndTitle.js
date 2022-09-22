import React from "react";

function HeadingAndTitle({
  heading,
  title,
  reverse = false,
  headingWidth = "w-[90%]",
  titleMaxWidth = "max-w-[18em]",
}) {
  return (
    <div>
      <div className={`${reverse ? null : headingWidth}`}>
        <p
          className={`fs-44px font-light mb-3vw leading-1_3 ${
            reverse ? `${headingWidth} ml-auto` : ""
          }`}
        >
          {heading}
        </p>
        <div className={`flex ${reverse ? "justify-start" : "justify-end"}`}>
          <p className={`fs-18px font-light ${titleMaxWidth}`}>{title}</p>
        </div>
      </div>
    </div>
  );
}

export default HeadingAndTitle;
