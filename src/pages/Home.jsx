import ProductPage from "./ProductPage"
import HeroSection from "../components/HeroSection";
import CustomerTestimonials from "../components/CustomerTestimonials";

const Home = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ProductPage />
      <CustomerTestimonials />
    </div>
  );
};

export default Home;
