import React from "react";
import Slider from "react-slick";
import partner1 from "../assets/trusted/partner-1.svg";
import partner2 from "../assets/trusted/partner-2.svg";
import partner3 from "../assets/trusted/partner-3.svg";
import partner4 from "../assets/trusted/partner-4.svg";
import partner5 from "../assets/trusted/partner-5.svg";
import partner6 from "../assets/trusted/partner-6.svg";
import starIcon from "../assets/trusted/starburst.png";

// Import slick-carousel css styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrustedCard from "./TrustedCard";

export type Partner = {
  id: number;
  slug: string;
  image: string;
};

const partners: Partner[] = [
  {
    id: 1,
    image: partner1,
    slug: "new-seat-tools",
  },
  {
    id: 2,
    image: partner2,
    slug: "new-seat-tools",
  },
  {
    id: 3,
    image: partner3,
    slug: "new-seat-tools",
  },
  {
    id: 4,
    image: partner4,
    slug: "new-seat-tools",
  },
  {
    id: 5,
    image: partner5,
    slug: "new-seat-tools",
  },
  {
    id: 6,
    image: partner6,
    slug: "new-seat-tools",
  },
];

const NewProducts: React.FC = () => {
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

export default NewProducts;
