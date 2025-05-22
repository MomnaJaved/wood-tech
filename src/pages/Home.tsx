import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import ProductCategories from "../components/ProductCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import NewProducts from "../components/NewProducts";
import ChooseUs from "../components/ChooseUs";
import SalesSection from "../components/Sales";
import TrustedPartners from "../components/TrustedPartners";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    document.title = "Global Wood Tech - Premium Wood Furniture";
  });
  return (
    <div>
      <HeroSection />
      {<ProductCategories />}
      {<FeaturedProducts />}
      {<ChooseUs />}
      {<NewProducts />}
      {<SalesSection />}
      {<TrustedPartners />}
      {<Footer />}
    </div>
  );
};

export default Home;
