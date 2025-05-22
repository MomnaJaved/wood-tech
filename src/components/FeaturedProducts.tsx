import React from "react";
import Slider from "react-slick";
import bedIcon from "../assets/featuredProducts/bedIcon.png";
import { PrevArrow, NextArrow } from "./CustomArrows";
import ProductCard from "./ProductCard";

import { products } from "../constants/products";

const FeaturedProducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
          <div className="w-16 h-16 mb-4">
            <img
              src={bedIcon}
              alt="chairIcon"
              className="w-full h-auto object-cover"
            />
          </div>
          <h2 className="text-3xl font-serif font-semibold mb-2">
            Featured Products
          </h2>
          <p className="max-w-2xl text-neutral-600">
            Discover our handpicked selection of standout products. Elevate your
            lifestyle with our top picks that combine quality, style, and
            innovation.
          </p>
        </div>

        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
        <div className="flex flex-col items-center mt-4">
          <button className="border-2 border-white text-white font-bold py-3 px-10 bg-[#b08d57] transition z-10 transition-colors transition-transform hover:scale-110 focus:outline-none">
            All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
