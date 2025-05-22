import icon1 from "../assets/chooseUs/delivery.svg";
import icon2 from "../assets/chooseUs/return.svg";
import icon3 from "../assets/chooseUs/payment.svg";
import icon4 from "../assets/chooseUs/customer.svg";

export type CardType = {
  id: number;
  icon: string;
  title: string;
  text: string;
  slug: string;
};

export const cards: CardType[] = [
  {
    id: 1,
    icon: icon1,
    title: "Free Shipping",
    text: "Enjoy free shipping on all orders, making your shopping experience even more convenient. Get your favorite products delivered.",
    slug: "",
  },
  {
    id: 2,
    icon: icon2,
    title: "Easy to Return",
    text: "Experience hassle-free returns with our easy-to-use return policy. If you're not satisfied, simply return your product for a quick.",
    slug: "",
  },
  {
    id: 3,
    icon: icon3,
    title: "Secure Payment",
    text: "Shop with confidence using our secure payment options, ensuring your personal information stays protected. We prioritize your safety.",
    slug: "",
  },
  {
    id: 4,
    icon: icon4,
    title: "Customer Support",
    text: "Our dedicated customer support team is here to assist you every step of the way. Reach out to us anytime for prompt, friendly help.",
    slug: "",
  },
];
