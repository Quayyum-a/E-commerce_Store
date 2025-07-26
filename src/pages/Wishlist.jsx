import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { FiHeart, FiShoppingCart, FiTrash2, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { removeFromWishlist, clearWishlist, moveToCart } from "../api/wishlistSlice";
import { addToCart } from "../api/cartSlice";
import { toast } from "react-toastify";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const handleRemoveFromWishlist = (productId) => {
    dispatch(removeFromWishlist(productId));
    toast.success("Removed from wishlist");
  };

  const handleMoveToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(moveToCart(product.id));
    toast.success(`${product.title} moved to cart!`);
  };

  const handleClearWishlist = () => {
    if (window.confirm("Are you sure you want to clear your entire wishlist?")) {
      dispatch(clearWishlist());
      toast.success("Wishlist cleared");
    }
  };

  const renderStars = (rating) => {
    const stars = Math.round(rating);
    return "★".repeat(stars) + "☆".repeat(5 - stars);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <motion.div 
            className="flex items-center gap-4 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/shop" 
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FiArrowLeft className="w-5 h-5" />
              Back to Shop
            </Link>
          </motion.div>
          
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FiHeart className="text-red-500" />
            My Wishlist
          </motion.h1>
          
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              {wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''} in your wishlist
            </p>
            
            {wishlistItems.length > 0 && (
              <button
                onClick={handleClearWishlist}
                className="flex items-center gap-2 px-4 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition-colors"
              >
                <FiTrash2 className="w-4 h-4" />
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Wishlist Content */}
        {wishlistItems.length === 0 ? (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FiHeart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-8">
              Start adding items you love to your wishlist and they'll appear here.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {wishlistItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-xl">
                  <Link to={`/productdetails/${item.id}`}>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                  
                  {/* Remove from wishlist button */}
                  <button
                    onClick={() => handleRemoveFromWishlist(item.id)}
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors"
                  >
                    <FiHeart className="w-4 h-4 text-red-500 fill-current" />
                  </button>
                </div>

                {/* Product Details */}
                <div className="p-4">
                  <Link to={`/productdetails/${item.id}`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                  
                  <p className="text-sm text-gray-500 mb-3">{item.category}</p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-yellow-500 text-sm">{renderStars(item.rating)}</span>
                    <span className="text-sm text-gray-500">({item.rating})</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ${item.price}
                      </span>
                      {item.discountPercentage > 0 && (
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                          -{Math.round(item.discountPercentage)}% OFF
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleMoveToCart(item)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={item.stock < 1}
                    >
                      <FiShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                    
                    <button
                      onClick={() => handleRemoveFromWishlist(item.id)}
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <FiTrash2 className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  
                  {item.stock < 1 && (
                    <p className="text-xs text-red-600 mt-2 text-center">Out of stock</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        {/* Continue Shopping */}
        {wishlistItems.length > 0 && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Continue Shopping
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
