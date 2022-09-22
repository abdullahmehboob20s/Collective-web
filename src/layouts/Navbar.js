import React, { useState } from "react";
import Button from "../components/Button";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import OutsideClickDetector from "hooks/OutsideClickDetector";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = OutsideClickDetector(() => setIsSidebarOpen(false));

  return (
    <nav className="fixed top-0 left-0 w-full h-16 lg:h-6vw flex items-center z-50">
      <div className="container-wrapper flex items-center justify-between">
        <h4 className="fs-20px font-bold">collective_100</h4>

        <button
          className="flex lg:hidden text-xl"
          onClick={() => setIsSidebarOpen((val) => !val)}
        >
          <FiMenu />
        </button>

        <div
          ref={sidebarRef}
          className={`flex flex-col lg:flex-row lg:items-center lg:space-x-4vw fixed lg:static top-0 right-0 w-[240px] sm:w-[300px] lg:w-auto h-screen lg:h-auto border-l-2 lg:border-l-0 p-10 lg:p-0 transition-all duration-300 bg-body-bg z-[120] lg:bg-transparent ${
            isSidebarOpen
              ? "translate-x-0"
              : "translate-x-[240px] sm:translate-x-[300px] lg:translate-x-0"
          }`}
        >
          <button
            className="flex text-2xl lg:hidden mb-6 w-fit"
            onClick={() => setIsSidebarOpen(false)}
          >
            <MdClose />
          </button>

          <a href="/" className="block fs-16px font-normal mb-5 lg:mb-0">
            Private Offices
          </a>
          <a href="/" className="block fs-16px font-normal mb-5 lg:mb-0">
            Memberships
          </a>
          <a href="/" className="block fs-16px font-normal mb-5 lg:mb-0">
            Contact
          </a>
          <a href="/" className="block fs-16px font-normal mb-8 lg:mb-0">
            Account
          </a>
          <Button title="Enquire" />
        </div>
      </div>

      <div className={`black-screen ${isSidebarOpen ? "show" : ""}`}></div>
    </nav>
  );
}

export default Navbar;
