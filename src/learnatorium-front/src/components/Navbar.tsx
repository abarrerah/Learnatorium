/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-restricted-globals */
import React from "react";
import "../style/components/navbar.css";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

function Navbar(props: { name: string }) {
  const [t, i18n] = useTranslation("global");

  const logout = async()=>{
    await fetch('http://localhost:8050/logout', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
  });
    window.location.href="http://localhost:3000";
  }

  let menu;
  if (props.name !== "200") {
    menu = (
      <ul className="icons">
        <li>
          <Link to="/Login" uk-icon="icon: sign-in"></Link>
        </li>
        <li>
          <a uk-icon="icon: world"></a>
        </li>
        <li>
          <a uk-icon="icon:  bolt"></a>
        </li>
      </ul>
    );
  } else if (props.name === "200") {
    menu = (
      <ul className="icons">
        <li>
          <Link to="/profile" uk-icon="icon: user"></Link>
        </li>
        <li>
          <a uk-icon="icon: world"></a>
        </li>
        <li>
          <a uk-icon="icon:  bolt"></a>
        </li>
        <li>
          <a  uk-icon="icon:  sign-out" onClick={logout}></a>
        </li>
      </ul>
    );
  }
  return (
    <div>
      <header className="menu">
        <div className="menu-wrap">
          <img
            className="logo-img"
            alt="Learnatorium"
            src={"images/logo.png"}
          />
          <div className="logo-name">Learnatorium</div>
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
                <Link to="/Donation">Donation</Link>
              </li>
              <li>
                <ul className="icons">
                  {menu}
                </ul>
              </li>
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
