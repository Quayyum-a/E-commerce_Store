import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="block">
      <div className="font-extrabold tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        <span className="text-black">N</span>
        <span className="text-amber-500">I</span>
        <span className="text-black">K</span>
        <span className="text-stone-700">O</span>
        <span className="text-black">.</span>
        <span className="text-stone-500">CO</span>
      </div>
    </Link>
  );
};

export default Logo;
