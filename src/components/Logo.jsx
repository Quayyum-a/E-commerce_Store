import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="block">
      <div className="font-extrabold tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        <span className="text-slate-800">S</span>
        <span className="text-blue-600">H</span>
        <span className="text-slate-800">O</span>
        <span className="text-purple-600">P</span>
        <span className="text-slate-800">.</span>
        <span className="text-blue-500">CO</span>
      </div>
    </Link>
  );
};

export default Logo;
