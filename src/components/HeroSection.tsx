import React, { useState } from "react";

// Import images
import summerImage from "../assets/hero/summer.webp";

// import organicBlob from "../../assets/hero/organic-blob-shape-png.png";
import brownblob from "../assets/hero/brownblob.png";
import mainImage1 from "../assets/hero/sofaSlide1.webp";
import mainImage2 from "../assets/hero/sofaSlide2.webp";
import greenblob from "../assets/hero/greenblob.png";

export const Home = () => {
  const [activeSection, setActiveSection] = useState<number>(1);

  const handleDotClick = (section: number) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-white ">
      {/* Section 1 */}
      {activeSection === 1 && (
        <div className="relative flex flex-col lg:flex-row justify-between items-center w-full px-18 py-8 bg-white overflow-hidden">
          {/* Text Block */}
          <div className="w-full lg:w-1/2 z-10 text-left space-y-6 relative left-16">
            <h1 className="text-[6rem] font-serif font-bold text-gray-900 transform scale-y-125">
              2025
            </h1>

            <div className="relative w-full">
              <img
                src={summerImage}
                alt="Summer"
                className="absolute left-[13rem] bottom-[1rem] w-[20rem] h-auto object-cover opacity-100 z-20"
              />
            </div>

            <p className="text-4xl text-black font-cursive z-10 ">
              Brand-New Arrival Alert
            </p>
            <p className="text-4xl text-black font-cursive z-10">
              Your Next Favorite is Here!
            </p>

            <button className="bg-transparent border-2 border-black text-black font-bold py-2 px-8 hover:bg-black hover:text-white transition z-10">
              Shop Now
            </button>
          </div>

          {/* Sofa Image */}
          <div className="w-full lg:w-1/2 flex justify-end z-10 mt-10 lg:mt-0 relative right-15">
            <img
              src={mainImage1}
              alt="Flexible Sofa"
              className="w-[90%] h-auto object-contain rounded-md z-2"
            />
          </div>

          {/* OVERLAY Blob*/}
          <img
            src={brownblob}
            alt="Decorative Blob"
            className="absolute right-[25%] bottom-[12%] w-[700px] h-auto object-cover opacity-20 z-10"
          />

          {/* OVERLAY Discount Badge */}
          <div className="absolute left-[55%] bottom-[22%] transform -translate-x-1/2 z-20">
            <div className="relative">
              <img
                src={brownblob}
                alt="Blob"
                className="w-[180px] h-[80px] object-cover opacity-80"
              />
              <h2 className="absolute top-[50%] left-[50%] w-[20px] transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold text-white">
                -5% OFF
              </h2>
            </div>
          </div>

          {/* OVERLAY Price Box */}
          <div className="absolute top-[14%] left-[44%] px-6 py-4  text-left z-30">
            <p className="text-xl font-semibold text-[#b08d57]">Rs. 10,000</p>
            <h2 className="text-2xl font-bold mt-1 text-black">
              Flexible Sofa
            </h2>
            <button className="mt-3 text-sm text-black hover:text-[#b08d57] transition">
              Buy Now
            </button>
          </div>
        </div>
      )}

      {/* Section 2 */}
      {activeSection === 2 && (
        <div className="relative flex flex-col lg:flex-row justify-between items-center w-full py-12 px-34 bg-white overflow-hidden">
          {/* Text Block */}
          <div className="w-full lg:w-1/2 z-10 text-left space-y-6 relative left-4">
            <h1 className="text-[6rem] font-serif font-bold text-gray-900 transform scale-y-125">
              2025
            </h1>

            <div className="relative w-full">
              <img
                src={summerImage}
                alt="Summer"
                className="absolute left-[13rem] bottom-[1rem] w-[20rem] h-auto object-cover opacity-100 z-20"
              />
            </div>

            <p className="text-4xl text-black font-cursive z-10 ">
              Exciting New Arrivals
            </p>
            <p className="text-4xl text-black font-cursive z-10">
              Unmissable Just Landed
            </p>

            <button className="bg-transparent border-2 border-black text-black font-bold py-2 px-8 hover:bg-black hover:text-white transition z-10">
              Shop Now
            </button>
          </div>

          {/* Sofa Image */}
          <div className="w-full lg:w-1/2 flex justify-end z-10 mt-10 lg:mt-0 relative left-2">
            <img
              src={mainImage2}
              alt="Flexible Sofa"
              className="w-[90%] h-auto object-contain rounded-md z-2"
            />
          </div>

          {/* OVERLAY Blob*/}
          <img
            src={greenblob}
            alt="Decorative Blob"
            className="absolute right-[28%] bottom-[52%] w-[480px] h-auto object-cover opacity-20 z-10"
          />

          {/* OVERLAY Discount Badge */}
          <div className="absolute left-[62%] bottom-[22%] transform -translate-x-1/2 z-20">
            <div className="relative">
              <img
                src={greenblob}
                alt="Blob"
                className="w-[120px] h-auto object-cover opacity-80"
              />
              <h2 className="absolute top-[50%] left-[50%] w-[20px] transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold text-white">
                -5% OFF
              </h2>
            </div>
          </div>

          {/* OVERLAY Price Box */}
          <div className="absolute top-[14%] left-[44%] px-6 py-4  text-left z-30">
            <p className="text-xl font-semibold text-[#b08d57]">Rs. 8,000</p>
            <h2 className="text-2xl font-bold mt-1 text-black">
              Flexible Vase
            </h2>
            <button className="mt-3 text-sm text-black hover:text-[#b08d57] transition">
              Buy Now
            </button>
          </div>
        </div>
      )}

      {/*Dot Navigation */}
      <div className="flex justify-center space-x-4 ">
        <div
          onClick={() => handleDotClick(1)}
          className={`w-3 h-3 rounded-full cursor-pointer ${
            activeSection === 1 ? "bg-gray-900" : "bg-gray-400"
          }`}
        ></div>
        <div
          onClick={() => handleDotClick(2)}
          className={`w-3 h-3 rounded-full cursor-pointer ${
            activeSection === 2 ? "bg-gray-900" : "bg-gray-400"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Home;
