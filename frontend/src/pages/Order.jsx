import { useState } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { id: 1, name: 'Espresso', price: 2.50 },
  { id: 2, name: 'Cappuccino', price: 3.50 },
  { id: 3, name: 'Latte', price: 3.75 },
  { id: 4, name: 'Mocha', price: 4.00 },
  { id: 5, name: 'Croissant', price: 2.25 },
  { id: 6, name: 'Blueberry Muffin', price: 2.50 },
];

function Order() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="mx-8 px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Order Online</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Menu</h2>
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
                <span>{item.name} - ${item.price.toFixed(2)}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul className="space-y-2 mb-4">
                {cart.map((item, index) => (
                  <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded">
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="text-xl font-semibold mb-4">Total: ${totalPrice}</div>
              <Link
                to="/checkout"
                className="block w-full bg-green-500 text-white text-center px-4 py-2 rounded hover:bg-green-600 transition duration-300"
              >
                Proceed to Checkout
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Order;