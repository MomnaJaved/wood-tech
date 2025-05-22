import React from "react";
import Slider from "react-slick";
import likeIcon from "../assets/chooseUs/like.svg";
import Background from "../assets/chooseUs/choose-us.jpg";
import Card from "./Card";

import { cards } from "../constants/cards";

const ChooseUs = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 0,
    slidesToShow: 4,
    slidesToScroll: 0,
    autoplay: false,
    autoplaySpeed: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      className="py-6 px-30 bg-white min-h-screen"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 mt-14">
        <div className="flex flex-col items-left mb-10 text-left">
          <div className="w-24 h-16 mb-10">
            <img
              src={likeIcon}
              alt="Like Icon"
              className="w-full h-auto object-cover ml-2"
            />
          </div>
          <h2 className="text-3xl font-serif font-semibold mb-2 mt-2">
            Why you Choose Us
          </h2>
          <p className="max-w-2xl text-neutral-600 mt-2 mb-4">
            Choose us for unparalleled quality, exceptional service, and a
            commitment to your satisfaction. Join countless others who rely on
            us for reliability.
          </p>
        </div>

        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="px-2">
              <Card card={card} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ChooseUs;
