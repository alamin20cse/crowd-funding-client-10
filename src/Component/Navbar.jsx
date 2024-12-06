import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.webp'
import { AuthContex } from './AuthProvider';


const Navbar = () => {
    const link=<>
   <li><NavLink to='/'>Home</NavLink> </li>
   <li><NavLink to='/addnewcampaign'>Add new </NavLink> </li>
   <li><NavLink to='/allcampaign'>All Campign</NavLink> </li>
    
    </>

const {user,logOut}=useContext(AuthContex);
// console.log(user);


    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              
{link}

            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className='h-10 w-10 rounded-full' src={logo}></img>

          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {link}
          </ul>
        </div>


        <div className="navbar-end">
  {user && user?.email ? (
    <div className="relative flex items-center">
      {/* User Image with Hover Actions */}
      <div className="group relative flex items-center justify-center">
        <img
          className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-500"
          src={user?.photoURL || '/default-avatar.png'}
          alt="User Profile"
        />

        {/* Hover Actions Container */}
        <div className="absolute z-50 flex flex-col items-center top-full mt-0 group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-opacity duration-300">
          {/* Display Name Tooltip */}
          <div className="bg-gray-800 text-white text-sm rounded px-2 py-1">
            {user?.displayName || 'Anonymous'}
          </div>
          {/* Log Out Button */}
          <button
            onClick={logOut}
            className="bg-red-500 text-white rounded px-3 py-1 shadow-md hover:bg-red-600"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex gap-3">
      {/* Login Button */}
      <Link className="btn" to="/login">
        Login
      </Link>

      <Link className="btn" to="/register">
        Register
      </Link>
    </div>
  )}
</div>





      </div>
    );
};

export default Navbar;