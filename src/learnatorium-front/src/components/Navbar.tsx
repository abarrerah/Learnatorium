import React from "react";
import "../style/components/navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div>
      <header className="menu">
        <div className="menu-wrap">
          <img className="logo-img" alt="Learnatorium" src={'images/logo.png'}/>
            <div className="logo-name">
              Learnatorium
            </div>
          <input type="checkbox" id="checkbox" />
          <nav>
            <ul>
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Stories">Stories</Link>
              </li>
              <li>
                <Link to="/Test">Test</Link>
              </li>
              <li>
                <Link to="/AboutUs">About Us</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li>
                <Link to="/Donation">Donation</Link>
              </li>
              <div>
                <ul className="icons">
                  <li>
                    <Link to="/Login" uk-icon="icon: sign-in"></Link>
                  </li>
                  <li>
                      <span uk-icon="icon: world"></span>
                  </li>
                  <li>
                      <span uk-icon="icon:  bolt" ></span>
                  </li>
                </ul>
              </div>
            </ul>
          </nav>
          <label htmlFor="checkbox">
            <i className="fa fa-bars menu-icon"></i>
          </label>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
