import React, { useContext } from "react";
import './Header.css'
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
  const [ loggedInUser, setLoggedInUser] = useContext(UserContext); 

  return (
    <div className="container pt-3">
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            Express Rider
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>
                  Destination
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Contact
                </Link>
              </li>
              <li>
                  {
                    loggedInUser.email ? <li className="mt-2" >{ loggedInUser.name }</li> : 
                    <Link className="nav-link  btn btn-color text-white" to="/login">
                    Login
                    </Link>
                  }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
