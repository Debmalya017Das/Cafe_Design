import { useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      localStorage.setItem('token', response.data.token);
      // Trigger a page reload to update the header
      window.location.href = '/';
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
   <div className="flex justify-center items-center h-full bg-gradient-to-r from-blue-200 to-slate-100 py-12">
  <div className="bg-amber-100 shadow-lg rounded-lg p-8 max-w-sm w-full border border-black p-2">
    <h1 className="text-3xl font-semibold font-montserrat text-blue-950 text-center mb-6">Register</h1>
    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded border border-black p-2"
            placeholder='name'
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded border border-black p-2"
            placeholder='valid mail'
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded border border-black p-2"
            placeholder='password'
          />
        </div>
        <div className='text-center'>
           <button
          type="submit"
          className="w-1/3 bg-blue-950 text-white py-2 justify-items-center rounded hover:scale-110 transition duration-300"
        >
          Register
        </button>
        </div>
       
      </form>
      <p className="text-center mt-4">
        Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
      </p>
    </div>
    </div>
  );
}

export default Register;