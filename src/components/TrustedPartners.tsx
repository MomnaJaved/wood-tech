import React from "react";
import Slider from "react-slick";
import starIcon from "../assets/trusted/starburst.png";
import TrustedCard from "./TrustedCard";

import { partners } from "../constants/partners";

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="w-16 h-auto mb-4">
            <img
              src={starIcon}
              alt="starIcon"
              className="w-[80px] h-auto object-cover"
            />
          </div>
          <h2 className="text-3xl font-serif font-semibold mb-2">
            Trusted Partners
          </h2>
          <p className="max-w-2xl text-neutral-600">
            Count on our trusted partnerships to deliver excellence.
            Collaborating with industry leaders ensures top-quality products and
            services for your satisfaction.
          </p>
        </div>

        <Slider {...settings}>
          {partners.map((partner) => (
            <div key={partner.id} className="px-2">
              <TrustedCard partner={partner} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Partners;
