import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../api/cartSlice";
import { addToWishlist, removeFromWishlist } from "../api/wishlistSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product, viewMode = 'grid' }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  const renderStars = (rating) => {
    const stars = Math.round(rating);
    return "★".repeat(stars) + "☆".repeat(5 - stars);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      toast.success('Removed from wishlist');
    } else {
      dispatch(addToWishlist(product));
      toast.success('Added to wishlist!');
    }
  };

  if (viewMode === 'list') {
    return (
      <div className="flex border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white w-full">
        <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg group">
          <Link to={`/productdetails/${product.id}`}>
            <img
              src={product.thumbnail}
              alt={product.title || "Product Image"}
              loading="lazy"
              className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </Link>
        </div>

        <div className="flex-1 ml-4 flex flex-col justify-between">
          <div>
            <Link to={`/productdetails/${product.id}`}>
              <h3 className="text-lg font-semibold hover:text-blue-600 transition-colors">
                {product.title}
              </h3>
            </Link>
            <p className="text-sm text-gray-500 mt-1">{product.category}</p>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.description}</p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-green-600">
                ${product.price}
              </span>
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">{renderStars(product.rating)}</span>
                <span className="text-sm text-gray-500">({product.rating})</span>
              </div>
              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                -{Math.round(product.discountPercentage)}% OFF
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleWishlistToggle}
                className={`p-2 border rounded-lg transition-colors ${
                  isInWishlist
                    ? 'border-red-300 bg-red-50 text-red-500'
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                <FiHeart className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
              </button>
              <button
                onClick={handleAddToCart}
                disabled={product.stock < 1}
                className="flex items-center gap-2 px-6 py-2 bg-stone-800 text-white rounded-lg hover:bg-green-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white max-w-sm w-full mx-auto relative group">
      {/* Wishlist Button */}
      <button
        onClick={handleWishlistToggle}
        className={`absolute top-2 right-2 z-10 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 ${
          isInWishlist
            ? 'bg-red-500 text-white opacity-100'
            : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
        }`}
      >
        <FiHeart className={`w-4 h-4 ${isInWishlist ? 'fill-current' : ''}`} />
      </button>

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
        <Link to={`/productdetails/${product.id}`}>
          <h3 className="text-sm md:text-base font-semibold line-clamp-2 hover:text-blue-600 transition-colors">
            {product.title}
          </h3>
        </Link>
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
