import { motion } from "framer-motion";

const brandLogos = [
  "versace.png",
  "gucci.png",
  "prada.png",
  "calvin-klein.png",
  "balenciaga.png",
  "dior.png",
  "burberry.png",
];

const ProductBrands = () => {
  return (
    <div className="w-full bg-black overflow-hidden py-3">
      <motion.div
        className="flex gap-12 items-center "
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {[...brandLogos, ...brandLogos].map((logo, index) => (
          <img
            key={index}
            src={`${logo}`}
            alt="Brand Logo"
            className="h-12 sm:h-16 object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ProductBrands;
