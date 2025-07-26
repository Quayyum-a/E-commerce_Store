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
    <div className="w-full bg-black py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          {brandLogos.map((logo, index) => (
            <img
              key={index}
              src={`${logo}`}
              alt="Brand Logo"
              className="h-12 sm:h-16 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductBrands;
