/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-restricted-globals */
import React from "react";
import "../style/components/navbar.css";
import { Link } from "react-router-dom";

import {useTranslation} from "react-i18next";

function Navbar(props: { name: string }) {
  const [text,i18n]= useTranslation("global");

  const changeLanguage =()=>{
    if(i18n.language === "es"){
      i18n.changeLanguage("en");
    }else{
      i18n.changeLanguage("es");
    }
    
  }


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
        <li id="loginIcon">
          <Link to="/Login" uk-icon="icon: sign-in"></Link>
        </li>
        <li>
          <a uk-icon="icon: world" onClick={changeLanguage}></a>
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
          <a uk-icon="icon: world" onClick={changeLanguage}></a>
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
                <Link to="/">{text("navbar.home")}</Link>
              </li>
              <li>
                <Link to="/Stories">{text("navbar.stories")}</Link>
              </li>
              <li>
                <Link to="/Test">{text("navbar.test")}</Link>
              </li>
              <li>
                <Link to="/Donation">{text("navbar.donation")}</Link>
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
