const paymentImages = ["Badge", "Badges", "Badge (1)", "Badge (3)"];

const FooterSocials = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 mt-6 px-4">
      <p className="text-sm text-center md:text-left">
        Shop.co © 2000-2025, All Rights Reserved
      </p>

      <div className="flex gap-2 flex-wrap justify-center md:justify-end cursor-pointer">
        {paymentImages.map((img, index) => (
          <img
            key={index}
            src={`/${img}.png`}
            alt={`${img} payment method`}
            className="h-10 w-70 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default FooterSocials;
