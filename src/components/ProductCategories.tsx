import React from "react";
import Slider from "react-slick";
import CategoryCard from "./CategoryCard";
import product1 from "../assets/productCategory/product-1.jpg";
import product2 from "../assets/productCategory/product-2.jpg";
import product3 from "../assets/productCategory/product-3.jpg";
import chairIcon from "../assets/productCategory/chairIcon.png";
import { PrevArrow, NextArrow } from "./CustomArrows";

export type Category = {
  id: number;
  title: string;
  slug: string;
  image: string;
};

const categories: Category[] = [
  { id: 1, title: "New Seat Tools", image: product1, slug: "new-seat-tools" },
  {
    id: 2,
    title: "Modern Lamp Accessories",
    image: product2,
    slug: "modern-lamp-accessories",
  },
  {
    id: 3,
    title: "Furniture Maintenance Kit",
    image: product3,
    slug: "furniture-maintenance",
  },
];

const ProductCategories = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <section className="py-4 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="w-16 h-16 mb-4">
            <img
              src={chairIcon}
              alt="chairIcon"
              className="w-full h-auto object-cover"
            />
          </div>
          <h2 className="text-3xl font-serif font-semibold mb-2">
            Product Category
          </h2>
          <p className="max-w-2xl text-neutral-600">
            Explore our curated selection of premium products, tailored to suit
            every need and taste. From essentials to indulgences, find your
            perfect fit.
          </p>
        </div>

        <Slider {...settings}>
          {categories.map((category) => (
            <div key={category.id} className="px-2">
              <CategoryCard category={category} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProductCategories;
