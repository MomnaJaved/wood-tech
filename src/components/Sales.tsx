import React from "react";
import SaleCard from "./SaleCard";

import Sofa from "../assets/saleSection/sofa.webp";
import Bed from "../assets/saleSection/bed.webp";

const SalesSection: React.FC = () => {
  return (
    <div className="max-w-8xl mx-auto px-6 py-4 flex gap-4">
      <SaleCard
        title="Summer Sofa Sale"
        description="Upgrade your living space with our stylish and comfortable sofas at unbeatable prices. Perfect for any home, these sofas are designed to enhance your relaxation."
        bgImage={Sofa}
        targetDate={
          new Date(
            Date.now() +
              13 * 24 * 60 * 60 * 1000 +
              22 * 60 * 60 * 1000 +
              45 * 60 * 1000 +
              12 * 1000
          )
        }
      />
      <SaleCard
        title="Luxury Bedroom Sets"
        description="Transform your bedroom into a serene sanctuary with our luxury bedroom sets. Elegant designs, premium quality, and now available at a special discounted price."
        bgImage={Bed}
        targetDate={
          new Date(
            Date.now() +
              20 * 24 * 60 * 60 * 1000 +
              22 * 60 * 60 * 1000 +
              45 * 60 * 1000 +
              12 * 1000
          )
        }
      />
    </div>
  );
};

export default SalesSection;
