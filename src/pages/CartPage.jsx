import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../api/cartSlice";
import { MdDelete } from "react-icons/md"
import CartSummary from "../components/CartSummary";
import Loader from "../components/Loader";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {isLoading && <Loader />}
    <div className="px-4 py-10 pt-14 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6"> My Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-4 items-center border-b pb-4"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <p className="text-gray-500">{item.q}</p>

                  <div className="flex items-center mt-2 gap-3">
                    <button
                      className="w-8 h-8 border rounded text-lg"
                      onClick={() => dispatch(decrementQuantity(item.id))}
                    >
                      −
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button
                      className="w-8 h-8 border rounded text-lg"
                      onClick={() => dispatch(incrementQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="text-red-600 text-xl"
                  onClick={() => dispatch(removeFromCart(item.id))}
                  title="Remove item"
                >
                <MdDelete />
                </button>
              </div>
            ))}
          </div>
          <CartSummary />
        </div>
      )}
    </div>
    </>
  );
};

export default CartPage;
