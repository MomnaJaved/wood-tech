import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#19232C] text-white py-10 px-8 h-80">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-semibold border-l-4  border-[#b08d57] pl-2 mb-4">
            Global Wood Tech Map
          </h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Make your Meal</a>
            </li>
            <li>
              <a href="#">Our Clients</a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold border-l-4 border-[#b08d57] pl-2 mb-4">
            Customer Services
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">Common Questions</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold border-l-4  border-[#b08d57] pl-2 mb-4">
            Shopping Guide
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">How to place An Order?</a>
            </li>
            <li>
              <a href="#">Payment Methods</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="bg-transparent">
          {/* Optional dark background */}
          <form className="flex rounded-lg overflow-hidden shadow-md mt-30">
            <input
              type="email"
              placeholder="Please Enter Your email"
              className="px-1 py-2 w-80 text-[14px] text-gray-700 placeholder-gray-400 bg-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#b28b62] px-6 py-3 text-white font-semibold hover:opacity-90"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
