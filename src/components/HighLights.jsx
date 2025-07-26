import { IoChevronDownOutline } from "react-icons/io5";
import { Link } from "react-router";

const Highlights = () => {
  return (
    <div className="flex gap-4 items-center justify-center text-sm relative">

      <div className="hover:bg-stone-100 py-3 px-5 rounded-full cursor-pointer underline transition-all duration-300">
        <Link to="/">Home</Link>
      </div>

      <div className="hover:bg-stone-100 py-3 px-5 rounded-full cursor-pointer underline transition-all duration-300">
        <Link to="/shop">Shop</Link>
      </div>

      <div className="group relative flex items-center gap-1 hover:bg-stone-100 p-3 rounded-full cursor-pointer hover:underline">
        <span>Collections</span>
        <IoChevronDownOutline className="text-stone-900 text-xl" />

        <div className="absolute top-full left-0 mt-2 w-40 bg-white border rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
          <ul className="py-2">
            <li className="px-4 rounded-full py-2 hover:bg-blue-50 cursor-pointer">
              <Link to="/shop?category=mens-shirts">Men's Essentials</Link>
            </li>
            <li className="px-4 rounded-full py-2 hover:bg-blue-50 cursor-pointer">
              <Link to="/shop?category=womens-dresses">Women's Signature</Link>
            </li>
            <li className="px-4 rounded-full py-2 hover:bg-blue-50 cursor-pointer">
              <Link to="/shop?category=laptops">Premium Electronics</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-1 hover:bg-stone-100 py-3 px-5 rounded-full cursor-pointer relative group hover:underline">
        <span>Deals</span>
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
          <ul className="py-2">
            <li className="px-4 py-2 rounded-full hover:bg-purple-50 cursor-pointer">Limited Edition</li>
            <li className="px-4 py-2 rounded-full hover:bg-purple-50 cursor-pointer">Style Bundles</li>
            <li className="px-4 py-2 rounded-full hover:bg-purple-50 cursor-pointer">VIP Access</li>
          </ul>
        </div>
      </div>

      <div className="hover:bg-stone-100 p-3 rounded-full cursor-pointer relative group hover:underline">
        <span>Designers</span>
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
          <ul className="py-2">
            <li className="px-4 py-2 uppercase rounded-full hover:bg-blue-50 cursor-pointer">Stellar</li>
            <li className="px-4 py-2 uppercase rounded-full hover:bg-blue-50 cursor-pointer">Luxe Co</li>
            <li className="px-4 py-2 uppercase rounded-full hover:bg-blue-50 cursor-pointer">Urban Edge</li>
            <li className="px-4 py-2 uppercase rounded-full hover:bg-blue-50 cursor-pointer">Minimal</li>
            <li className="px-4 py-2 uppercase rounded-full hover:bg-blue-50 cursor-pointer">Elite</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
