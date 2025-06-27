// client/src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // ✅ Make sure this path is correct

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // ✅ Get addToCart function from CartContext

  return (
    <div className="border rounded-md p-4 shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-2 rounded"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-blue-700 font-bold mb-2">₹{product.price}</p>
      <div className="flex justify-between items-center">
        <Link to={`/product/${product._id}`} className="text-sm text-blue-500 hover:underline">
          View Details
        </Link>
        <button
          onClick={() => addToCart(product)}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
