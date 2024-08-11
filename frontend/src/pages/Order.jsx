import { useState } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { id: 1, name: 'Espresso', price: 2.50, ingredients: '(Finely ground coffee beans, Hot water)' },
  { id: 2, name: 'Cappuccino', price: 3.50, ingredients: '(Espresso, Steamed milk, Milk foam)' },
  { id: 3, name: 'Latte', price: 3.75, ingredients: '(Espresso, Steamed milk, Thin layer of foam)' },
  { id: 4, name: 'Mocha', price: 4.00, ingredients: '(Espresso, Choco syrup, Steamed milk, cream)' },
  { id: 5, name: 'Croissant', price: 2.25, ingredients: '(Butter, Flour, Yeast, Sugar, Salt)' },
  { id: 6, name: 'Blueberry Muffin', price: 2.50, ingredients: '(Flour, Berries, Sugar, Butter, Eggs, Milk)' },
];

function Order() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
   <div className="bg-gradient-to-b from-blue-200 to-amber-100 ">
    <div className="mx-8 lg:mx-12 px-4 py-8 ">
      <h1 className="text-4xl font-montserrat font-bold text-center mb-8">Order Online</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className='text-center'>
          <h2 className="text-2xl font-montserrat font-semibold mb-4">Menu</h2>
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.id} className="lg:mx-10 flex flex-col items-start py-4 px-3 rounded-lg shadow-lg rounded-[15px] bg-slate-100">
                  <div className="flex justify-between items-center w-full mb-2">
                    <span className="font-semibold">{item.name} - ${item.price.toFixed(2)}</span>
                    <span className="font-montserrat text-sm text-black text-left">{item.ingredients}</span>
                    <button
                      onClick={() => addToCart(item)} 
                      className="bg-green-600 text-white px-3 py-2 rounded-[25px] hover:bg-green-800 hover:scale-110 transition duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                  
                </li>
            ))}
          </ul>
        </div>
        <div className='text-center mx-12'>
          <h2 className="text-2xl font-montserrat font-semibold mb-4">Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul className="space-y-2 mb-4">
                {cart.map((item, index) => (
                  <li key={index} className="flex justify-between items-center p-2 shadow-lg rounded-[15px] bg-slate-100 lg:mx-24">
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="text-xl font-montserrat font-semibold mb-4">Total: ${totalPrice}</div>
              <Link
                to="/checkout"
                className=" bg-green-600 text-white text-center px-3 py-2 rounded-[25px] hover:bg-green-800 transition hover:scale-110 duration-300"
              >
                Proceed to Checkout
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Order;