/* eslint-disable no-cond-assign */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { SyntheticEvent, useState } from "react";
import "../style/pages/Login.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import * as entry from './env/entrypoints';

function signIn() {
  const [text]= useTranslation("global");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
      await fetch(entry.entrypointBack+"/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const result = await fetch(entry.entrypointBack+"/user",{
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
    result.json()
    .then((e)=>{
      if(e[0].role===3){
        window.location.href=entry.entrypointFront+"/Admin";
      }else{
        window.location.href = entry.entrypointFront+"/profile";
      }
    })
    .catch((e)=>{console.log(e)})
  };
  

  return (
    <div className="login uk-flex">
      <section>
        <h2 id="titleLogin">Learnatorium</h2>
        <h4 id="legendLogin">{text("login.section.h4")}</h4>
        <p id="parragraphLogin">
        {text("login.section.p1")}
        </p>
        <p id="parragraphLogin">
        {text("login.section.p2")}
        </p>

        <h6 id="infoLogin">{text("login.section.h6")}</h6>
        <div>
          <button className="uk-button " id="registerButton">
            <Link to="/Register">{text("login.section.signUpButton")}</Link>
          </button>
        </div>
      </section>
      <section>
        <div className="oAuth uk-flex uk-flex-column uk-flex-middle">
          <button className="uk-button uk-button-large facebook uk-width-1-3 uk-margin-bottom uk-margin-top" id="buttonLogin">
            <span uk-icon="icon: facebook"></span>
            Facebook
          </button>
          <button className="uk-button google uk-width-1-3 uk-margin-bottom uk-margin-bottom" id="buttonLogin">
            <span uk-icon="icon: google"></span>
            Google
          </button>
          <button className="uk-button twitter uk-width-1-3 uk-button-large uk-margin-bottom" id="buttonLogin">
            <span uk-icon="icon: twitter"></span>
            Twitter
          </button>
          <button className="uk-button twitch uk-width-1-3 uk-button-large " id="buttonLogin">
            <span uk-icon="icon: twitch"></span>
            Twitch
          </button>
        </div>
        <div className="Login uk-margin-large-top  ">
          <h3>{text("login.loginBox.h3")}</h3>
          <form onSubmit={submit}>
            <div className="uk-margin">
              <input
                className="uk-input uk-form-width-large"
                id="loginEmail"
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="uk-input uk-input uk-form-width-large uk-margin-top"
                id="loginPassword"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="uk-button uk-button-primary uk-margin-top" id="submitButtonLogin">
              {text("login.loginBox.button")}
              </button>
            </div>
          </form>
        </div>
        <div className="info">
          {text("login.loginBox.info.fPart")}
          <br></br>
          {text("login.loginBox.info.sPart")}
        </div>
      </section>
    </div>
  );
}

export default signIn;
