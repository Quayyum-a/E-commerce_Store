import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';

const ProductPage = () => {
  const searchTerm = useOutletContext();
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products?limit=194');
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 52);

  if (loading) return <Loader />;

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center text-gray-500 py-20 text-xl">
        No matching products found.
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-3 py-5 lg:px-12">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center items-center py-10">
        <button
          className={`bg-stone-900 font-mono text-white px-7 py-3 rounded-full hover:bg-stone-700 transition duration-300 ${
            displayedProducts.length === filteredProducts.length
              ? "opacity-60 cursor-not-allowed"
              : ""
          }`}
          onClick={() => setShowAll(true)}
        >
          {showAll ? "All Products Loaded" : "View All Products"}
        </button>
      </div>
    </>
  );
};

export default ProductPage;
