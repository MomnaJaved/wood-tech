import React from "react";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  image: string;
  slug: string;
  price: string;
};

type ProductProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductProps) => {
  return (
    <Link
      to={`/category/${product.slug}`}
      className="group relative overflow-hidden rounded-lg block"
    >
      <div className="h-80 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Button appears at bottom over image on hover */}
        <button
          className="
            absolute bottom-4 left-1/2 transform -translate-x-1/2
            bg-transparent 
            py-1
            w-full
            text-[18px] text-black
            opacity-0
            group-hover:opacity-100
            transition-opacity
            hover:text-[#b08d57]
            cursor-pointer
            shadow
            border-[2px]
            hover:text-white transition
            hover:bg-black border-black
          "
          type="button"
        >
          Add to Cart
        </button>
      </div>

      <div className="p-4 bg-white text-left">
        <h3 className="font-medium uppercase tracking-wide text-sm text-neutral-800">
          {product.title}
        </h3>
        <h4 className="font-bold uppercase tracking-wide text-sm text-neutral-800">
          {product.price}
        </h4>
      </div>
    </Link>
  );
};

export default ProductCard;
