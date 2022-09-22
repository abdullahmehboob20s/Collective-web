import React from "react";

function Gallery() {
  return (
    <div>
      <div className="container-wrapper grid grid-cols-2 gap-3vw">
        <img src="images/grid-img-1.png" alt="" />
        <img src="images/grid-img-2.png" alt="" />
        <img src="images/grid-img-3.png" className="col-span-2" alt="" />
      </div>
    </div>
  );
}

export default Gallery;
