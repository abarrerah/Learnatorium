/* eslint-disable no-cond-assign */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { SyntheticEvent, useState } from "react";
import "../style/pages/register.css";
import axios from 'axios';
import { useTranslation } from "react-i18next";

function signUp() {
  const [text]= useTranslation("global");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setPasswordR] = useState("");

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setEmail("");
    setUser("");
    setPassword("");
    setPasswordR("");
  }

  const submit =  (e: SyntheticEvent) => {
    e.preventDefault();
     axios.post('http://localhost:8050/register',{
       "name":user,
       "email":email,
       "password":password
     }).then(res=>{
       console.log(res)

       if(res.status=201){
        window.location.href="http://localhost:3000/Login";
       }
     }).catch(e=>{
       console.log(e);
       alert("Invalid password or email.");
     })
     ;
  };

  return (
    <div>
      <section className="signUp">
        <h2 className="uk-heading-medium uk-text-bold uk-text-muted uk-text-capitalize uk-text-center">
        {text("register.h2")} <span className="uk-text-primary">{text("register.span")}</span>
        </h2>
        <form onSubmit={submit}>
          <div className="uk-margin">
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: mail"></span>
              <input
                className="uk-input"
                id="inputRegister inputRegister1"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: user"></span>
              <input
                className="uk-input"
                id="inputRegister inputRegister2"
                type="text"
                placeholder="Username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
          </div>

          <div className="uk-margin">
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: lock"></span>
              <input
                className="uk-input uk-form-danger"
                id="inputRegister inputRegister3"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="uk-margin">
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: lock"></span>
              <input
                className="uk-input uk-form-danger uk-margin-buttom"
                id="inputRegister inputRegister4"
                type="password"
                placeholder="Repeat password"
                value={rPassword}
                onChange={(e) => setPasswordR(e.target.value)}
              />
            </div>
          </div>
          <section className="uk-flex">
            <input
              type="submit"
              className="uk-button uk-button-primary uk-margin-top "
              id="buttonsRegister buttonsRegister1"
              value="Submit"
            ></input>
            <input
              type="reset"
              className="uk-button uk-button-danger uk-margin-top "
              value="Clear"
              id="buttonsRegister buttonsRegister2"
              onClick={handleSubmit}
            ></input>
          </section>
        </form>
        <p>
          {text("register.p1")}
        </p>
        <p>
          {text("register.p2")}
        </p>
        <h3>{text("register.h3")}</h3>
      </section>
    </div>
  );
}

export default signUp;
