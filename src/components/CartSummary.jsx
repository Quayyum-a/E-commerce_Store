import { useSelector } from "react-redux";

const CartSummary = () => {
 const cartItems = useSelector((state) => state.cart.cartItems || []);
 const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
    <div className="bg-stone-50 rounded-xl p-6 shadow-md h-fit">
        <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
        <div className="flex justify-between text-gray-600">
            <span>Total Items</span>
            <span>{totalQty}</span>
        </div>
        <div className="flex justify-between mt-2 font-medium">
            <span>Total</span>
            <span>${totalAmount.toFixed(2)}</span>
        </div>
        <form className="py-2">
            <input 
            type="text" 
            name="promo" 
            id="promo" 
            placeholder=" Add promo code" 
            className="py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-stone-500 shadow-sm text-sm sm:text-base"
            required
            />
            <button className="bg-black text-white py-2 px-4 ml-8 rounded-full">Apply</button>
        </form>
        <button className="w-full bg-black text-white py-2 rounded-full hover:opacity-90 transition">
            Go to Checkout
        </button>
        </div>
    </div>
  )
}

export default CartSummary
