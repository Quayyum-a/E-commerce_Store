import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { addToCart } from "../api/cartSlice";
import Loader from "../components/Loader";
import CustomerTestimonials from "../components/CustomerTestimonials";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.thumbnail || product.images?.[0],
        size: selectedSize,
        quantity,
      })
    );

    toast.success(`${product.title} added to cart`)
  };

useEffect(() => {
  const fetchProduct = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setSelectedImage(data.thumbnail || data.images?.[0] || "");
      setIsLoading(false);
    } catch (error) {
      console.error("Fetch failed:", error); 
    }
  };

  fetchProduct(); 
}, [id]);

  if (isLoading || !product) return <Loader />;

  return (
    <>
      <div className="px-4 pt-28 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8">
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex sm:flex-col gap-3 sm:overflow-y-auto max-h-[500px]">
            {product.images?.map((img, index) => (
              <img
                key={`img-${index}`}
                src={img}
                alt={`product-${index}`}
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 object-cover rounded cursor-pointer border ${
                  selectedImage === img ? "border-black" : "border-gray-300"
                }`}
              />
            ))}
          </div>

          <div className="flex-1">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full rounded-xl max-h-[500px] object-contain"
            />
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-extrabold uppercase text-gray-800">
            {product.title}
          </h1>

          <div className="flex items-center gap-1 text-yellow-500">
            {Array.from({ length: 5 }, (temp, i) => (
              <span key={i}>{i < Math.round(product.rating) ? "★" : "☆"}</span>
            ))}
            <span className="text-sm text-gray-600 ml-2">{product.rating}/5</span>
          </div>

          <div className="text-xl font-bold">
            ${product.price}
            <span className="line-through text-gray-500 text-base ml-2">
              ${Math.round(product.price * 1.15)}
            </span>
            <span className="text-red-500 text-sm ml-2">-15%</span>
          </div>

          <p className="text-sm text-gray-700">{product.description}</p>

          {product.returnPolicy && (
            <p className="text-sm text-red-700">{product.returnPolicy}</p>
          )}

          <div>
            <p className="text-sm font-semibold mb-1">Select Colors</p>
            <div className="flex gap-2">
              <span className="w-6 h-6 rounded-full bg-green-900 border-2 border-black" />
              <span className="w-6 h-6 rounded-full bg-gray-700" />
              <span className="w-6 h-6 rounded-full bg-blue-900" />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold mb-1 mt-3">Choose Size</p>
            <div className="flex gap-2 flex-wrap">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-1 rounded-full text-sm border transition ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "border-gray-300 text-gray-700"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4 flex-wrap">
            <div className="flex items-center border border-gray-300 rounded-full px-3 py-1">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="text-lg p-1"
              >
                <HiMinus />
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="text-lg p-1"
              >
                <HiPlus />
              </button>
            </div>

            <button
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-green-900 transition duration-300"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>

  
          <div className="mt-6 border-t pt-4 flex gap-8 text-sm text-gray-500 flex-wrap">
            <button className="text-black font-semibold">Product Details</button>
            <button>Rating & Reviews</button>
            <button>FAQs</button>
          </div>
        </div>
      </div>

      <CustomerTestimonials />
    </>
  );
};

export default ProductDetails;
