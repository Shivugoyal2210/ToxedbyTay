import React from "react";
import { mainLanding, logo } from "../assets/images";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import auth from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const activeStyles = {
    textDecoration: "underline",
  };
  const navigate = useNavigate();

  const [isMobileNav, setisMobileNav] = useState(false);

  const [user, loading] = useAuthState(auth);
  const handleNav = () => {
    if (isMobileNav) {
      setisMobileNav(false);
    } else {
      setisMobileNav(true);
    }
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-screen h-20 bg-opacity-0 z-10 absolute">
      <nav className="flex items-center justify-between px-2 py-8 z-10">
        <div className="mr-auto px-10 ">
          <img
            onClick={() => navigate(`/`)}
            className="logo-navbar cursor-pointer"
            src={logo}
          />
        </div>
        <div className="block lg:hidden mr-5 z-50" onClick={handleNav}>
          {isMobileNav ? (
            <CloseIcon style={{ color: "#545454" }} />
          ) : (
            <MenuIcon style={{ color: "#545454" }} />
          )}
        </div>
        <div className="hidden lg:flex text-[19px] mr-10">
          <ul className="flex gap-28">
            {/* <li>
               {!user && (
                <NavLink
                  className="cursor-pointer"
                  to="/login"
                  style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                  Login
                </NavLink>
              )} */}
            {/* {user && (
                <NavLink className="cursor-pointer" onClick={handleSignout}>
                  Logout
                </NavLink>
              )} 
            </li> */}
            <li>
              <a
                className="cursor-pointer"
                href="https://skinbetter.pro/toxedbytay"
                target="_blank"
              >
                Shop
              </a>
            </li>
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
              <a
                className="cursor-pointer py-3 px-3 text-white bg-black"
                href="https://toxedbytay.glossgenius.com/"
                target="_blank"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <ul
        className={
          isMobileNav
            ? "mobile-nav lg:hidden flex flex-col gap-10 ease-out duration-200"
            : "fixed left-[100%]"
        }
      >
        <li>
          <a
            className="cursor-pointer"
            href="https://skinbetter.pro/toxedbytay"
            target="_blank"
          >
            Shop
          </a>
        </li>
        <li>
          <NavLink
            className="cursor-pointer"
            to="/services"
            onClick={() => {
              setisMobileNav(false);
            }}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            className="cursor-pointer"
            to="/contact"
            onClick={() => {
              setisMobileNav(false);
            }}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className="cursor-pointer"
            to="/"
            onClick={() => {
              setisMobileNav(false);
            }}
          >
            Book Now
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
