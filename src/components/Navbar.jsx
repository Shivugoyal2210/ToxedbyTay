import React from 'react';
import { mainLanding, logo } from '../assets/images';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const activeStyles = {
    textDecoration: 'underline',
  };
  const navigate = useNavigate();

  return (
    <div className="w-screen h-20 bg-opacity-0 z-10 absolute">
      <nav className="flex items-center px-2 py-8 z-10">
        <div className="mr-auto px-10 ">
          <img
            onClick={() => navigate(`/`)}
            className="logo_navbar h-12 object-contain cursor-pointer"
            src={logo}
          />
        </div>
        <div className="hidden lg:flex space-x-20 text-[19px] mr-10">
          <ul className="flex gap-10">
            <li>
              <NavLink
                className="cursor-pointer"
                to="/services"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className="cursor-pointer"
                to="/contact"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                className="cursor-pointer py-3 px-3 text-white bg-black"
                to="/"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Book Now
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
