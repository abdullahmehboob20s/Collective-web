import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="container-wrapper">
        <div className="pt-5vw border-t-2 border-white">
          <div className="grid grid-cols-[1fr_auto_auto_auto_auto] gap-6vw mb-8vw">
            <div>
              <h1 className="fs-44px text-white font-bold mb-1_4vw leading-1">
                collective_100
              </h1>
              <p className="fs-16px mb-2vw font-light">
                Cremorne based coworking space. Level 2, 100 Cubitt Street,
                Cremorne, Victoria, Australia.{" "}
              </p>

              <div className="flex items-center space-x-1vw">
                <a href="/" target="_blank" className="fs-24px text-white-gray">
                  <FaFacebookF />
                </a>
                <a href="/" target="_blank" className="fs-24px text-white-gray">
                  <FaTwitter />
                </a>
                <a href="/" target="_blank" className="fs-24px text-white-gray">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div>
              <h4 className="fs-20px text-blue font-light mb-1_4vw">About</h4>

              <div className="space-y-1_2vw">
                <a href="/" className="block fs-16px font-light">
                  About collective_100
                </a>
                <a href="/" className="block fs-16px font-light">
                  Our impact
                </a>
                <a href="/" className="block fs-16px font-light">
                  Location
                </a>
                <a href="/" className="block fs-16px font-light">
                  News
                </a>
              </div>
            </div>
            <div>
              <h4 className="fs-20px text-blue font-light mb-1_4vw">
                Memberships
              </h4>

              <div className="space-y-1_2vw">
                <a href="/" className="block fs-16px font-light">
                  Private offices
                </a>
                <a href="/" className="block fs-16px font-light">
                  Dedicated desk
                </a>
                <a href="/" className="block fs-16px font-light">
                  Shared desk
                </a>
                <a href="/" className="block fs-16px font-light">
                  Virtual office
                </a>
              </div>
            </div>
            <div>
              <h4 className="fs-20px text-blue font-light mb-1_4vw">
                Ammenities
              </h4>

              <div className="space-y-1_2vw">
                <a href="/" className="block fs-16px font-light">
                  Meeting rooms
                </a>
                <a href="/" className="block fs-16px font-light">
                  Launch event space
                </a>
                <a href="/" className="block fs-16px font-light">
                  Meeting room bundles
                </a>
                <a href="/" className="block fs-16px font-light">
                  Ammenities overview
                </a>
              </div>
            </div>
            <div>
              <h4 className="fs-20px text-blue font-light mb-1_4vw">Contact</h4>

              <div className="space-y-1_2vw">
                <a href="/" className="block fs-16px font-light">
                  Contact us
                </a>
                <a href="/" className="block fs-16px font-light">
                  Request a tour
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="fs-16px font-light">
              © 2022 collective_100. Developed by Ten Squared.
            </p>

            <div className="flex items-center space-x-1_4vw">
              <a href="/" target="_blank" className="fs-16px font-light">
                Privacy Policy
              </a>
              <a href="/" target="_blank" className="fs-16px font-light">
                Terms and Conditions
              </a>
              <a href="/" target="_blank" className="fs-16px font-light">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
