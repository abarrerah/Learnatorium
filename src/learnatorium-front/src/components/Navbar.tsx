import React from "react";
import "../style/components/navbar.css";

function Navbar() {
  return (
    <div>
      <header className="menu">
        <div className="menu-wrap">
          <img className="logo-img" alt="Learnatorium" />

          <input type="checkbox" id="checkbox" />
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Stories</a>
              </li>
              <li>
                <a href="#">Test</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Donation</a>
              </li>
              <div>
                <ul className="icons">

                  <li>
                    <a href="">
                      <span uk-icon="icon: sign-in"></span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span uk-icon="icon: world"></span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span uk-icon="icon:  bolt"></span>
                    </a>
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
