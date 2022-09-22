import React from "react";
import Button from "./Button";

function TitleBar({ title }) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="fs-44px text-white font-light">{title}</h1>
      <Button title="Enquire" />
    </div>
  );
}

export default TitleBar;
