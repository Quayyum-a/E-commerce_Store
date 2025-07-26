import { useState, useEffect } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const testimonials = [
  {
    star: "⭐⭐⭐⭐⭐",
    name: "Adebayo K. ✅",
    message:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable.",
  },
  {
    star: "⭐⭐⭐⭐",
    name: "Funmilayo A. ✅",
    message:
      "Shop.co has changed the way I shop! Their curated selections and quality are unbeatable.",
  },
  {
    star: "⭐⭐⭐⭐⭐",
    name: "Olumide J. ✅",
    message:
      "I was amazed by the fast delivery and how the clothes fit perfectly. Highly recommended!",
  },
  {
    star: "⭐⭐⭐⭐",
    name: "Kemi T. ✅",
    message:
      "A shopping experience like no other. From browsing to checkout, everything felt smooth.",
  },
  {
    star: "⭐⭐⭐⭐⭐",
    name: "Emeka U. ✅",
    message:
      "What I love most is their attention to detail and how they keep trends in mind. Love Shop.co!",
  },
  {
    star: "⭐⭐⭐⭐",
    name: "Blessing O. ✅",
    message:
      "Excellent customer service and top-notch products. I'll definitely be coming back!",
  },
  {
    star: "⭐⭐⭐⭐⭐",
    name: "Chioma N. ✅",
    message:
      "The quality of clothes exceeded my expectations. Every piece I've ordered has been perfect for my style!",
  },
  {
    star: "⭐⭐⭐⭐",
    name: "Tunde S. ✅",
    message:
      "Fast shipping to Lagos and amazing customer support. Shop.co truly understands fashion!",
  },
  {
    star: "⭐⭐⭐⭐⭐",
    name: "Amara I. ✅",
    message:
      "I love how trendy and affordable their collections are. Perfect for the modern Nigerian woman!",
  },
];

const CustomerTestimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, testimonials.length - visibleCount)
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) =>
        prev >= testimonials.length - visibleCount ? 0 : prev + 1
      );
    }, 9000); 

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + visibleCount
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`p-2 rounded-full border transition-all duration-300 ${
            startIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-green-500"
          }`}
        >
          <HiOutlineChevronLeft className="text-xl" />
        </button>

        <h2 className="text-2xl sm:text-4xl font-bold underline text-center">
          OUR HAPPY CUSTOMERS
        </h2>

        <button
          onClick={handleNext}
          disabled={startIndex >= testimonials.length - visibleCount}
          className={`rounded-full border transition-all duration-300 ${
            startIndex >= testimonials.length - visibleCount
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-green-500"
          }`}
        >
          <HiOutlineChevronRight className="text-xl" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg relative overflow-hidden group shadow-lg hover:shadow-xl transform transition-transform duration-500 hover:scale-105"
          >

            <div className="absolute inset-0 bg-gradient-to-b from-red-600 to-red-900 opacity-0 group-hover:opacity-100 transition-all duration-500 z-0"></div>

            <div className="relative z-10 flex flex-col items-center text-black group-hover:text-white transition-colors duration-500">
              <p className="text-xl">{testimonial.star}</p>
              <h3 className="font-semibold text-lg mb-2">{testimonial.name}</h3>
              <p className="text-sm italic">"{testimonial.message}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTestimonials;
