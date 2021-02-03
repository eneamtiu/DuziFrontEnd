import React from "react";
import { NavLink } from "react-router-dom";
import { GiBookmark } from "react-icons/gi";

function Navbar() {
  return (
    <>
      <div class="container d-flex align-items-center">
        <h1 class="logo me-auto">
          <NavLink to="/" exact className="link">
            <GiBookmark className="logo" /> <span id="logo-name">e</span>
            <span id="logo-text">Learning</span>
          </NavLink>
        </h1>
        <nav class="nav-menu d-none d-lg-block">
          <ul>
            <li class="active">
              <NavLink to="/schools" className="mr-5">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/schools">Login</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
