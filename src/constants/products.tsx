import product2 from "../assets/featuredProducts/product-2.webp";
import product3 from "../assets/featuredProducts/product-3.webp";
import product4 from "../assets/featuredProducts/product-4.webp";
import product5 from "../assets/featuredProducts/product-5.webp";
import product6 from "../assets/featuredProducts/product-6.webp";
import product7 from "../assets/featuredProducts/product-7.jpg";

export type Product = {
  id: number;
  title: string;
  slug: string;
  image: string;
  price: string;
};

export const products: Product[] = [
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
