import React from "react";
import { NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <NavLink className="navbar-brand main_head" to="/">
                Hockerty
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mb-lg-0">
                  <li className="nav-item mx-3">
                    <NavLink className="nav-link" to="/newarrivals">
                      NEW ARRIVALS
                    </NavLink>
                  </li>
                  <li className="nav-item link mx-3">
                    <NavLink className="nav-link" to="/clothing">
                      CLOTHING
                    </NavLink>
                  </li>
                  <li className="nav-item link mx-3">
                    <NavLink className="nav-link" to="/outerwear">
                      OUTERWEAR
                    </NavLink>
                  </li>
                  <li className="nav-item link mx-3">
                    <NavLink className="nav-link" to="/shoes">
                      SHOES
                    </NavLink>
                  </li>
                  <li className="nav-item link mx-3">
                    <NavLink className="nav-link" to="/accessories">
                      ACCESSORIES
                    </NavLink>
                  </li>
                  <li className="nav-item link mx-3">
                    <NavLink className="nav-link" to="/knowmore">
                      KNOW MORE
                    </NavLink>
                  </li>

                  <div className="outer_icons">
                    <li className="nav-item info_icons mx-3">
                      <i class="fa fa-bell-o"></i>
                    </li>
                    <li className="nav-item info_icons mx-3">
                      <i class="fa fa-user-circle"></i>
                    </li>
                    <li className="nav-item info_icons mx-3">
                      <i class="fa fa-shopping-cart"></i>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
