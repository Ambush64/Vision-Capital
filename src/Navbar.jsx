import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-transparent">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://justpaste.it/img/small/4715d0e93592f13519df8b1074bd9c53.jpg"
              alt="logo"
            />
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  end
                  className={({ isActive }) =>
                    isActive ? "menu_active nav-link active" : "nav-link active"
                  }
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  end
                  className={({ isActive }) =>
                    isActive ? "menu_active nav-link " : "nav-link "
                  }
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  end
                  className={({ isActive }) =>
                    isActive ? "menu_active nav-link " : "nav-link "
                  }
                  to="/portfolio"
                >
                  Portfolio
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "menu_active nav-link disabled"
                      : "nav-link disabled"
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Help
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      end
                      className={({ isActive }) =>
                        isActive ? "menu_active dropdown-item" : "dropdown-item"
                      }
                      to="/service"
                    >
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      end
                      className={({ isActive }) =>
                        isActive
                          ? "menu_active dropdown-item disabled"
                          : "dropdown-item disabled"
                      }
                      to="/faq"
                    >
                      Faq
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Home;
