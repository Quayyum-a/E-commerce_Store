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
    <div className="w-full bg-black py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8">
          {brandLogos.map((logo, index) => (
            <img
              key={index}
              src={`${logo}`}
              alt="Brand Logo"
              className="h-6 sm:h-8 md:h-10 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductBrands;
