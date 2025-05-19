import React from "react";
import Slider from "react-slick";
import likeIcon from "../assets/chooseUs/like.svg";
import icon1 from "../assets/chooseUs/delivery.svg";
import icon2 from "../assets/chooseUs/return.svg";
import icon3 from "../assets/chooseUs/payment.svg";
import icon4 from "../assets/chooseUs/customer.svg";
import Background from "../assets/chooseUs/choose-us.jpg";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export type CardType = {
  id: number;
  icon: string;
  title: string;
  text: string;
  slug: string;
};

const cards: CardType[] = [
  {
    id: 1,
    icon: icon1,
    title: "Free Shipping",
    text: "Enjoy free shipping on all orders, making your shopping experience even more convenient. Get your favorite products delivered.",
    slug: "",
  },
  {
    id: 2,
    icon: icon2,
    title: "Easy to Return",
    text: "Experience hassle-free returns with our easy-to-use return policy. If you're not satisfied, simply return your product for a quick.",
    slug: "",
  },
  {
    id: 3,
    icon: icon3,
    title: "Secure Payment",
    text: "Shop with confidence using our secure payment options, ensuring your personal information stays protected. We prioritize your safety.",
    slug: "",
  },
  {
    id: 4,
    icon: icon4,
    title: "Customer Support",
    text: "Our dedicated customer support team is here to assist you every step of the way. Reach out to us anytime for prompt, friendly help.",
    slug: "",
  },
];

const ChooseUs: React.FC = () => {
  // Slider settings (add as needed)
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
      className="py-6 px-30 bg-white min-h-screen" // add min-h-screen here
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
