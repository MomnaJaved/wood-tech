import React from "react";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const PrevArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
}) => (
  <button
    className={`
      absolute z-10 left-[-10px] top-[40%] transform -translate-y-1/2
      bg-white rounded-full p-2 shadow-md text-gray-600
      hover:bg-[#b08d57] hover:text-white
      transition-colors transition-transform
      hover:scale-110
      focus:outline-none
    `}
    style={{ ...style }}
    onClick={onClick}
    aria-label="Previous"
    type="button"
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

export const NextArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
}) => (
  <button
    className={`
      absolute z-10 right-[-10px] top-[40%] transform -translate-y-1/2
      bg-white rounded-full p-2 shadow-md text-gray-600
      hover:bg-[#b08d57] hover:text-white
      transition-colors transition-transform
      hover:scale-110
      focus:outline-none
    `}
    style={{ ...style }}
    onClick={onClick}
    aria-label="Next"
    type="button"
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 5l7 7-7 7" />
    </svg>
  </button>
);
