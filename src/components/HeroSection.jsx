import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CustomerReactionCounter from "./CustomerReactionCouter"; 
import ProductBrands from "./ProductBrands";

const HeroSection = () => {
  return (
    <section style={{backgroundColor: "#F2F0F1"}} className="relative md:pt-10 w-full bg-gray-100 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        
        <div className="relative z-10 flex items-center justify-center px-4 sm:px-8 md:px-10 py-10 md:py-0">
          <motion.div
            className="max-w-2xl text-stone-900"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
            }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-5 font-bold mb-6 md:mb-10 leading-tight text-center md:text-left"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              DISCOVER YOUR SIGNATURE STYLE
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-500 mb-6 md:mb-10 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Explore our curated collection of premium fashion pieces,
              carefully selected to express your unique personality and elevate your wardrobe.
            </motion.p>

            <motion.div
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Link to="/login">
                <button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 sm:px-10 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition duration-300 ease-in-out hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-lg"
                >
                  Explore Collection
                </button>
              </Link>
            </motion.div>

            <CustomerReactionCounter />
          </motion.div>
        </div>

        <img
          src="/hero2.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      <ProductBrands />
    </section>
  );
};

export default HeroSection;
