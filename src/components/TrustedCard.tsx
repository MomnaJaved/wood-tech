import React from "react";
import { Link } from "react-router-dom";

type Partner = {
  id: number;
  image: string;
  slug: string;
};

type PartnerProps = {
  partner: Partner;
};

const TrustedCard = ({ partner }: PartnerProps) => {
  return (
    <Link
      to={`/chooseUS/${partner.slug}`}
      className="group overflow-hidden rounded-lg transition-transform hover:-translate-y-1 block"
    >
      <div
        className="
          bg-white rounded-lg 
          shadow-[0_0_8px_2px_rgba(255,255,255,0.8)] 
          hover:shadow-none
          p-2 h-[35vh] w-[18vw] 
          flex flex-col items-start text-left
          transition-shadow duration-300 mt-15 
        "
      >
        <img
          src={partner.image}
          className="
            mb-4 w-full h-auto 
            transition-transform duration-300
            hover:scale-110 hover:-translate-x-2
            cursor-pointer
          "
        />
      </div>
    </Link>
  );
};

export default TrustedCard;
