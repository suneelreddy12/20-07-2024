import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          All Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/full-stack-development" className={({ isActive }) => (isActive ? "active" : "")}>
            Full Stack Development
          </NavLink>
        </li>
        <li>
          <NavLink to="/data-science" className={({ isActive }) => (isActive ? "active" : "")}>
            Data Science
          </NavLink>
        </li>
        <li>
          <NavLink to="/cyber-security" className={({ isActive }) => (isActive ? "active" : "")}>
            Cyber Security
          </NavLink>
        </li>
        <li>
          <NavLink to="/career" className={({ isActive }) => (isActive ? "active" : "")}>
            Career
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
