import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import MyLink from '../MyLink';
import logo from '../../assets/logo.png';
import icon from '../../assets/icon.png';
import { AuthContext } from '../../provider/AuthProvider';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleLogout = () => {
    logOut();
    navigate('/');
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li><MyLink to="/">Home</MyLink></li>
              <li><MyLink to="/all-books">All Books</MyLink></li>
              <li><MyLink to="/add-book">Add Book</MyLink></li>
              <li><MyLink to="/my-books">My Books</MyLink></li>
            </ul>
          </div>
          <img className="w-50 h-10" src={logo} alt="logo" />
        </div>

        <div className="navbar-center hidden lg:flex"></div>

        <div className="navbar-end">
          <ul className="menu-horizontal px-1">
            <li className="mx-6"><MyLink to="/">Home</MyLink></li>
            <li className="mx-6"><MyLink to="/all-books">All Books</MyLink></li>
            <li className="mx-6"><MyLink to="/add-book">Add Book</MyLink></li>
            <li className="mx-6"><MyLink to="/my-books">My Books</MyLink></li>
          </ul>

          <div className="flex gap-4 items-center relative">
            {user && (
              <div
                className="relative"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                
                <img
                  className="bg-accent rounded-full w-10 h-10 cursor-pointer"
                  src={user.photoURL || icon}
                  alt="user"
                />

                
                <AnimatePresence>
                  {showTooltip && (
                    <motion.div
  key="tooltip"
  initial={{ opacity: 0, y: -5 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -5 }}
  transition={{ duration: 0.25 }}
  className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-md shadow-md whitespace-nowrap z-[9999]"
>
  {user.displayName || user.email}
</motion.div>

                  )}
                </AnimatePresence>
              </div>
            )}

            {user ? (
              <button
                onClick={handleLogout}
                className="btn btn-outline btn-accent px-6 py-3 rounded-lg text-lg"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/auth/signin"
                className="btn btn-outline btn-accent px-6 py-3 rounded-lg text-lg"
              >
                Signin
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
