import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navber = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="#">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  activeClassName="active"
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  to="/treeservice"
                >
                  Tree Service
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item"  to="/tree-cutting">
                    tree cutting
                  </NavLink>
                  <NavLink className="dropdown-item"  to="/tree-trimming">
                    quience tree trimming
                  </NavLink>

                  <NavLink className="dropdown-item" to="/tree-planting">
                    planting and removal
                  </NavLink>
                  <NavLink className="dropdown-item" to="/stump-grinding">
                    stump grinding
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/treeremoval"
                >
                  tree removal
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/emergency"
                >
                  emergency service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/about"
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/contact"
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navber;
