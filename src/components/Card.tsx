import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  card: {
    id: number;
    icon: string;
    title: string;
    text: string;
    slug: string;
  };
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <Link
      to={`/chooseUS/${card.slug}`}
      className="group overflow-hidden rounded-lg transition-transform hover:-translate-y-1 block"
    >
      <div
        className="
    bg-white rounded-lg 
    shadow-[0_0_8px_2px_rgba(255,255,255,0.8)] 
    hover:shadow-none
    p-6 h-[35vh] w-[18vw] 
    flex flex-col items-start text-left
    transition-shadow duration-300
  "
      >
        <img
          src={card.icon}
          alt={card.title}
          className="
      mb-4 w-12 h-12 
      transition-transform duration-300
      hover:scale-110 hover:-translate-x-2
      cursor-pointer
    "
        />
        <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
        {card.text && <p className="text-sm text-gray-600">{card.text}</p>}
      </div>
    </Link>
  );
};

export default Card;
