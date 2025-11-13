import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import MyLink from "../MyLink";
import logo from "../../assets/logo.png";
import icon from "../../assets/icon.png";
import { AuthContext } from "../../provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  return (
    <div className="navbar bg-base-100 shadow-sm relative z-[9999] overflow-visible">
     
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[9999] mt-3 w-52 p-2 shadow"
          >
            <li><MyLink to="/">Home</MyLink></li>
            <li><MyLink to="/all-books">All Books</MyLink></li>
            <li><MyLink to="/add-book">Add Book</MyLink></li>
            <li><MyLink to="/my-books">My Books</MyLink></li>
          </ul>
        </div>
        <img className="w-40 h-10 object-contain" src={logo} alt="logo" />
      </div>

      {/* Center links (hidden on mobile) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="mx-4"><MyLink to="/">Home</MyLink></li>
          <li className="mx-4"><MyLink to="/all-books">All Books</MyLink></li>
          <li className="mx-4"><MyLink to="/add-book">Add Book</MyLink></li>
          <li className="mx-4"><MyLink to="/my-books">My Books</MyLink></li>
        </ul>
      </div>

     
      <div className="navbar-end flex items-center gap-4 overflow-visible">
        {user && (
          <>
            
            <img
              id="user-avatar"
              data-tooltip-content={user.displayName || user.email}
              data-tooltip-id="user-tooltip"
              className="bg-accent rounded-full w-10 h-10 cursor-pointer object-cover"
              src={user.photoURL || icon}
              alt="user avatar"
            />
           
            <Tooltip
              id="user-tooltip"
              place="bottom"
              className="!bg-gray-800 !text-white !px-3 !py-1 !rounded-md !text-sm shadow-md z-[9999]"
            />
          </>
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
  );
};

export default Navbar;
