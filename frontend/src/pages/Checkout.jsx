import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    address: '',
    paymentMethod: 'credit',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process order
    console.log('Order submitted:', formData);
    alert('Order placed successfully!');
    navigate('/');
  };

  if (!isLoggedIn) {
    return null; // or a loading spinner
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-blue-200 to-slate-100 pb-9">
      <h1 className="text-3xl font-semibold text-blue-950 text-center mb-8 font-montserrat">Checkout</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="address" className="block mb-2 font-montserrat text-md">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-3 py-2  rounded border border-black p-2 "
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="paymentMethod" className="block mb-2 font-montserrat">Payment Method</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-black p-2 rounded font-montserrat"
          >
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-1/3 bg-blue-800 text-white px-3 py-2 rounded-[25px] hover:bg-blue-950 hover:scale-110 transition duration-300 mt-3"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;