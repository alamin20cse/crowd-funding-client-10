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

const {user}=useContext(AuthContex);
console.log(user);


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

          {/*  */}
         <div className='flex '>
          <div>
          <img
                className="w-10 h-10  rounded-full"
                src={user?.photoURL || '/default-avatar.png'} // Fallback to default avatar
                alt="User Profile"
            />
            <p>{user?.email}</p>
          </div>

         <button className='btn'>
            <Link to='/login'>
            Log in
            
            </Link>


          </button>
         </div>
        </div>
      </div>
    );
};

export default Navbar;