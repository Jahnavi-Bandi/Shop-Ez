import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart = [], removeFromCart } = useCart(); // ✅ fallback to []

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item._id} className="mb-4 border p-4 rounded">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p>₹{item.price}</p>
              <button
                className="mt-2 px-4 py-1 bg-red-500 text-white rounded"
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </button>
            </div>
          ))}
          <hr className="my-4" />
          <h2 className="text-xl font-bold">Total: ₹{total}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
