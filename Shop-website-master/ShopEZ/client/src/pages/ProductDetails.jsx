// client/src/pages/ProductDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/2 rounded shadow"
      />
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-xl text-green-600 mb-4">₹{product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
