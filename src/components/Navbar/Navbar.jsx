import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="bg-white text-black py-3 flex justify-center shadow-lg w-full mx-auto">
        <ul class="flex space-x-3 gap-3 px-3 py-1 text-xl ">
          <NavLink
            to="/"
            className={(e) => {
              return e.isActive
                ? "bg-cyan-500 text-white px-2 py-1 rounded-md"
                : "tracking-widest cursor-pointer";
            }}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(e) => {
              return e.isActive
                ? "bg-cyan-500 text-white px-2 py-1 rounded-md"
                : "tracking-widest cursor-pointer";
            }}
          >
            <li>About</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={(e) => {
              return e.isActive
                ? "bg-cyan-500 text-white px-2 py-1 rounded-md"
                : "tracking-widest cursor-pointer";
            }}
          >
            <li>Contact</li>
          </NavLink>
          <NavLink
            to="/github"
            className={(e) => {
              return e.isActive
                ? "bg-cyan-500 text-white px-2 py-1 rounded-md"
                : "tracking-widest cursor-pointer";
            }}
          >
            <li>Github</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
