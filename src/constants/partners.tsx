import partner1 from "../assets/trusted/partner-1.svg";
import partner2 from "../assets/trusted/partner-2.svg";
import partner3 from "../assets/trusted/partner-3.svg";
import partner4 from "../assets/trusted/partner-4.svg";
import partner5 from "../assets/trusted/partner-5.svg";
import partner6 from "../assets/trusted/partner-6.svg";

export type Partner = {
  id: number;
  slug: string;
  image: string;
};

export const partners: Partner[] = [
  {
    id: 1,
    image: partner1,
    slug: "new-seat-tools",
  },
  {
    id: 2,
    image: partner2,
    slug: "new-seat-tools",
  },
  {
    id: 3,
    image: partner3,
    slug: "new-seat-tools",
  },
  {
    id: 4,
    image: partner4,
    slug: "new-seat-tools",
  },
  {
    id: 5,
    image: partner5,
    slug: "new-seat-tools",
  },
  {
    id: 6,
    image: partner6,
    slug: "new-seat-tools",
  },
];
