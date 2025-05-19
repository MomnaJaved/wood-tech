import React from "react";
import Slider from "react-slick";
import product2 from "../assets/featuredProducts/product-2.webp";
import product3 from "../assets/featuredProducts/product-3.webp";
import product4 from "../assets/featuredProducts/product-4.webp";
import product5 from "../assets/featuredProducts/product-5.webp";
import product6 from "../assets/featuredProducts/product-6.webp";
import product7 from "../assets/featuredProducts/product-7.jpg";
import bedIcon from "../assets/featuredProducts/bedIcon.png";
import { PrevArrow, NextArrow } from "./CustomArrows";
// Import slick-carousel css styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";

export type Product = {
  id: number;
  title: string;
  slug: string;
  image: string;
  price: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "Luxury Leather Armchair",
    image: product2,
    slug: "new-seat-tools",
    price: "24,999.00",
  },
  {
    id: 2,
    title: "Elegant Dining Table With Chairs",
    image: product3,
    slug: "modern-lamp-accessories",
    price: "35,499.00",
  },
  {
    id: 3,
    title: "Compact Storage Cabinet",
    image: product4,
    slug: "furniture-maintenance",
    price: "8,499.00",
  },
  {
    id: 4,
    title: "Vintage Wooden Side Table",
    image: product5,
    slug: "furniture-maintenance",
    price: "7,999.00",
  },
  {
    id: 5,
    title: "Contemporary Sofa Set",
    image: product6,
    slug: "furniture-maintenance",
    price: "12,999.00",
  },
  {
    id: 6,
    title: "Modern Wooden Coffee Table",
    image: product7,
    slug: "furniture-maintenance",
    price: "12,999.00",
  },
];

const FeaturedProducts: React.FC = () => {
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
          <button className=" border-2 border-white text-white font-bold py-3 px-10 bg-[#b08d57] transition z-10  transition-colors transition-transform hover:scale-110 focus:outline-none">
            All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
