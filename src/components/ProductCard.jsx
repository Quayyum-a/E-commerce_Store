import { useDispatch } from "react-redux";
import { addToCart } from "../api/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const renderStars = (rating) => {
    const stars = Math.round(rating);
    return "★".repeat(stars) + "☆".repeat(5 - stars);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div className="flex flex-col border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white max-w-sm w-full mx-auto">
      <div className="w-full h-60 sm:h-56 md:h-64 overflow-hidden rounded-lg group">
        <Link to={`/productdetails/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.title || "Product Image"}
            loading="lazy"
            className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110"
          />
        </Link>
      </div>

      <div className="mt-3 flex flex-col gap-1 px-5">
        <h3 className="text-sm md:text-base font-semibold line-clamp-2">
          {product.title}
        </h3>
        <span className="text-xs text-gray-500 italic">
          Category: {product.category}
        </span>
      </div>

      <div className="flex sm:flex-row justify-between mt-3 gap-3 px-5">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold text-white bg-green-500 hover:bg-green-700 hover:scale-110 transition duration-200 py-1 px-4 rounded-md text-center">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </p>

          <p className="text-xs">
            <span className="text-gray-500 underline">In Stock: </span>
            <span
              className={`text-sm font-semibold ${
                product.stock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.stock > 0 ? product.stock : "Out of stock"}
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center  gap-2">
          <p className="text-yellow-600 text-sm bg-green-100 p-1 rounded-md text-center">
            {renderStars(product.rating)}
            <span className="ml-1">{product.rating}</span>
          </p>

          <span className="text-xs font-medium text-yellow-500 border border-yellow-600 px-2 py-0.5 rounded-full hover:text-white hover:bg-yellow-700 transition duration-200">
            -{Math.round(product.discountPercentage)}% OFF
          </span>
        </div>
      </div>

      <button
        className="mt-3 w-full bg-stone-800 text-white py-2 rounded-md hover:bg-green-900 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label={`Add ${product.title} to cart`}
        onClick={handleAddToCart}
        disabled={product.stock < 1}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
