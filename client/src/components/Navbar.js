import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import Tripx4 from "../Images/Tripx4.png";
import Dashboard from './Dashboard';

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'text-lightbBlue'
      : 'text-white hover:text-lightbBlue';
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className="bg-deepBlue">
      <div className="flex flex-wrap items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="cursor-pointer">
          <Link to="/">
            <img src={Tripx4} className="w-12 rounded-md" alt="Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 lg:space-x-20">
          {['Home', 'Destinations', 'Packages', 'WishList','Hotels'].map((item) => {
            const path = item.toLowerCase().replace(/\s+/g, '-');
            return (
              <li
                key={item}
                className={`font-mullish py-2 lg:py-7 cursor-pointer transition-all duration-100 hover:ease-in-out relative group ${getLinkClass(`/${path === 'home' ? '' : path}`)}`}
              >
                <Link to={`/${path === 'home' ? '' : path}`}>{item}</Link>
              </li>
            );
          })}
        </ul>

        {/* User Login/Logout or Dashboard Dropdown */}
        <div className="hidden md:flex space-x-4 relative">
          {!user ? (
            <>
              <button
                aria-label="Log in"
                onClick={() => navigate('/login')}
                className="py-2 px-6 lg:py-2.5 lg:px-7 font-mullish text-white bg-transparent border-2 border-lightbBlue rounded-full text-sm font-semibold hover:bg-lightbBlue hover:text-white transition-colors duration-300"
              >
                Log in
              </button>
              <button
                aria-label="Sign up"
                onClick={() => navigate('/signup')}
                className="py-2 px-6 lg:py-2.5 lg:px-7 font-mullish text-lightbBlue bg-transparent border-2 border-lightbBlue rounded-full text-sm font-semibold hover:bg-lightbBlue hover:text-white transition-colors duration-300"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              <span
                className="text-greenLight md:flex mt-2 font-bold cursor-pointer"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                Welcome, {user.name}
              </span>
              {showDropdown && <Dashboard user={user} />}
              <button
                onClick={handleLogout}
                className="py-2 px-6 lg:py-2.5 lg:px-7 font-mullish text-lightbBlue bg-transparent border-2 border-lightbBlue rounded-full text-sm font-semibold hover:bg-lightbBlue hover:text-white transition-colors duration-300"
              >
                Log out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
