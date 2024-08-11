import { useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
//   const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
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
    <h1 className="text-3xl font-semibold font-montserrat text-blue-950 text-center mb-6">Login</h1>
    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-montserrat text-black mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
          placeholder='mail'
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
          placeholder='password'
        />
      </div>
      <div className='text-center'>
         <button
        type="submit"
        className="w-1/3 bg-blue-950 text-white py-2 justify-items-center rounded hover:scale-110 transition duration-300"
      >
        Login
      </button>
      </div>
     
    </form>
    <p className="text-center text-sm mt-6">
      Don’t have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
    </p>
  </div>
</div>

  );
}

export default Login;