import { HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";

const TopHeader = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-stone-900 px-4 py-2 flex items-center justify-center relative text-center">
      <p className="text-white text-sm sm:text-base leading-snug max-w-[90%] sm:max-w-full">
        Sign up and get 20% off your first order.
        <Link className="underline ml-1 sm:ml-2" to="/signup">
          Sign Up Now
        </Link>
      </p>
      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-xl sm:text-2xl"
        onClick={() => setIsVisible(false)}
        aria-label="Close banner"
      >
        <HiOutlineX />
      </button>
    </div>
  );
};

export default TopHeader;
