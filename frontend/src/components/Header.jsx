import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className="bg-slate-50 shadow-lg rounded-b-[25px] border-black">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between h-[5rem] ">
        <Link to="/" className="text-red-500 font-bold text-2xl lg:ml-24">Café</Link>
        <nav>
          <ul className="flex space-x-4 ">
            <li><Link to="/" className="text-slate-800 mx-3 hover:scale-110 inline-block duration-300 hover:text-red-500">Home</Link></li>
            <li><Link to="/about" className="text-slate-800 mx-3 hover:text-red-500 hover:scale-110 inline-block duration-300">About Us</Link></li>
            <li><Link to="/menu" className="text-slate-800 mx-3 hover:text-red-500 hover:scale-110 inline-block duration-300">Menu</Link></li>
            <li><Link to="/order" className="text-slate-800 mx-3 hover:text-red-500 hover:scale-110 inline-block duration-300">Order Online</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4 lg:mr-12">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="text-slate-800 hover:text-red-500">
              Logout
            </button>
          ) : (
            <Link to="/login" className="text-slate-800 hover:text-red-500">
              <button className="text-slate-800 hover:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;