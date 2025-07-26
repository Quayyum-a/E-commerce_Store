import { IoChevronDownOutline } from "react-icons/io5";
import { Link } from "react-router";

const Highlights = () => {
  return (
    <div className="flex gap-4 items-center justify-center text-sm relative">

      <div className="hover:bg-stone-100 py-3 px-5 rounded-full cursor-pointer underline transition-all duration-300">
        <Link to="/">Home</Link>
      </div>

      <div className="group relative flex items-center gap-1 hover:bg-stone-100 p-3 rounded-full cursor-pointer hover:underline">
        <span>Shop</span>
        <IoChevronDownOutline className="text-stone-900 text-xl" />

        <div className="absolute top-full left-0 mt-2 w-40 bg-white border rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
          <ul className="py-2">
            <li className="px-4 rounded-full py-2 hover:bg-stone-100 cursor-pointer">Men</li>
            <li className="px-4 rounded-full py-2 hover:bg-stone-100 cursor-pointer">Women</li>
            <li className="px-4 rounded-full py-2 hover:bg-stone-100 cursor-pointer">Accessories</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-1 hover:bg-stone-100 py-3 px-5 rounded-full cursor-pointer relative group hover:underline">
        <span>Sale</span>
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
          <ul className="py-2">
            <li className="px-4 py-2 rounded-full hover:bg-stone-100 cursor-pointer">Clearance</li>
            <li className="px-4 py-2 rounded-full hover:bg-stone-100 cursor-pointer">Bundle Deals</li>
            <li className="px-4 py-2 rounded-full hover:bg-stone-100 cursor-pointer">Flash Sale</li>
          </ul>
        </div>
      </div>

      <div className="hover:bg-stone-100 p-3 rounded-full cursor-pointer relative group hover:underline">
        <span>Brands</span>
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
          <ul className="py-2">
            <li className="px-4 py-2 uppercase rounded-full hover:bg-stone-100 cursor-pointer">Adidas</li>
            <li className="px-4 py-2 uppercase rounded-full hover:bg-stone-100 cursor-pointer">Gucci</li>
            <li className="px-4 py-2 uppercase rounded-full hover:bg-stone-100 cursor-pointer">Versace</li>
            <li className="px-4 py-2 uppercase rounded-full hover:bg-stone-100 cursor-pointer">Zara</li>
            <li className="px-4 py-2 uppercase rounded-full hover:bg-stone-100 cursor-pointer">Prada</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
