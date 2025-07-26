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

        <h2 className="text-2xl sm:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          ✨ OUR HAPPY CUSTOMERS ✨
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
            className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl relative overflow-hidden group shadow-md hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 border border-blue-200"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl">{testimonial.star}</div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.message}"
              </p>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <h3 className="font-bold text-gray-800 text-sm">{testimonial.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTestimonials;
