import React from "react";
import Button from "../components/Button";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-6vw flex items-center z-50">
      <div className="container-wrapper flex items-center justify-between">
        <h4 className="fs-16px font-bold">collective_100</h4>

        <div className="flex items-center space-x-4vw">
          <a href="/" className="block fs-16px font-normal">
            Private Offices
          </a>
          <a href="/" className="block fs-16px font-normal">
            Memberships
          </a>
          <a href="/" className="block fs-16px font-normal">
            Contact
          </a>
          <a href="/" className="block fs-16px font-normal">
            Account
          </a>
          <Button title="Enquire" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
