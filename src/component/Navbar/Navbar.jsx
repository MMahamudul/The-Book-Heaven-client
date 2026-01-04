import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import MyLink from "../MyLink";
import icon from "../../assets/icon.png";
import { AuthContext } from "../../provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useState } from "react";
import { useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { FcReading } from "react-icons/fc";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  const toogleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className=" mx-auto px-45 bg-green-50 navbar overflow-visible sticky top-0 z-50">
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
          {user ? (<ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[9999] mt-3 w-52 p-2 shadow"
          >
            <li>
              <MyLink to="/">Home</MyLink>
            </li>
            <li>
              <MyLink to="/all-books">All Books</MyLink>
            </li>
            <li>
            <MyLink to="/blogs">Blogs</MyLink>
          </li>
            
            <li>
              <MyLink to="/add-book">Add Book</MyLink>
            </li>
            <li>
              <MyLink to="/my-books">My Books</MyLink>
            </li>
            <li>
            <MyLink to="/support">Support</MyLink>
          </li>
          </ul>): (<ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[9999] mt-3 w-52 p-2 shadow"
          >
            <li>
              <MyLink to="/">Home</MyLink>
            </li>
            <li>
              <MyLink to="/all-books">All Books</MyLink>
            </li>
            <li >
            <MyLink to="/blogs">Blogs</MyLink>
          </li>
            <li>
            <MyLink to="/support">Support</MyLink>
          </li>
          </ul>)}
        </div>
        <div className="flex items-center justify-center">
          <span >
            <FcReading size={36} color=""/>
          </span>
          <h1 className="text-blue-400 text-3xl font-bold">Book<span className="text-accent font-bold">Heaven</span></h1>
        </div>
      </div>

      {/* Center links (hidden on mobile) */}
      <div >
        <ul className="menu menu-horizontal px-1">
          {user ? (<div className="navbar-center hidden lg:flex">
            <li className="mx-2 ">
            <MyLink  to="/">Home</MyLink>
          </li>
          <li className="mx-2">
            <MyLink to="/all-books">All Books</MyLink>
          </li>
          <li className="mx-2">
            <MyLink to="/blogs">Blogs</MyLink>
          </li>
          <li className="mx-2">
            <MyLink to="/add-book">Add Book</MyLink>
          </li>
          <li className="mx-2">
            <MyLink to="/my-books">My Books</MyLink>
          </li>
           <li className="mx-2">
            <MyLink to="/support">Support</MyLink>
          </li>
          </div>): ( <div className="navbar-center hidden lg:flex">
            <li className="mx-2">
            <MyLink to="/">Home</MyLink>
          </li>
          <li className="mx-2">
            <MyLink to="/all-books">All Books</MyLink>
          </li>
          <li className="mx-2">
            <MyLink to="/blogs">Blogs</MyLink>
          </li>
          
           <li className="mx-2">
            <MyLink to="/support">Support</MyLink>
          </li>
          </div>

          )}
          
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
            className="btn btn-outline btn-accent px-6 py-5 text-lg sm:btn-sm sm:text-sm sm:px-1 w-30 rounded-lg"
          >
            Logout <BiLogOut size={24}/>
          </button>
        ) : (
          <Link
            to="/auth/signin"
            className="btn btn-outline btn-accent px-6 py-5 text-lg w-30 rounded-lg"
          >
            Login <FaSignInAlt size={28}/>
          </Link>
        )}
        <div>
          <input
            onChange={(e) => toogleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
