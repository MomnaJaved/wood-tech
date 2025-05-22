import React from "react";
import { Link } from "react-router-dom";

type Category = {
  id: number;
  title: string;
  image: string;
  slug: string;
};

type CategoryProps = {
  category: Category;
};

const CategoryCard = ({ category }: CategoryProps) => {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group overflow-hidden rounded-lg transition-transform hover:-translate-y-1 block"
    >
      <div className="h-80 overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 bg-white text-center">
        <h3 className="font-medium uppercase tracking-wide text-sm text-neutral-800">
          {category.title}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
