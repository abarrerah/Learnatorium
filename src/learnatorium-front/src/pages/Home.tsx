import React from "react";
import "../style/pages/home.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const imagePath = "images/home/row-1-col-1.jpg";
const style = { backgroundImage: `url('file://${imagePath}')` };

function Home() {
  
  const [text]= useTranslation("global");
  return (
    <div className="main-home">
      <div className="text">
        <div className="main-text">
          <h1 className="uk-text-italic">Learnatorium</h1>
          <h3>
          {text("home.h3.content")} <span>{text("home.h3.span")}</span>
          </h3>
          <p>
          {text("home.p1")}
          </p>
          <p>
          {text("home.p2")}
          </p>
          <div className="explore uk-flex ">
            <span uk-icon="icon : triangle-right"></span>
            <h4>{text("home.explore.h4")}</h4>
          </div>
        </div>
      </div>
      <div className="image ">
        <div style={style} className="uk-inline-clip uk-transition-toggle">
          <img className="uk-transition-scale-up uk-transition-opaque" src={"images/home/row-1-col-1.jpg"} alt="" />
        </div>
        <div className="uk-inline-clip uk-transition-toggle">
          <img className="uk-transition-scale-up uk-transition-opaque" src={"images/home/row-1-col-2.jpg"} alt="" />
        </div>
        <div className="uk-inline-clip uk-transition-toggle">
          <img className="uk-transition-scale-up uk-transition-opaque" src={"images/home/row-1-col-3.jpg"} alt="" />
        </div>
        <div className="uk-inline-clip uk-transition-toggle">
          <img className="uk-transition-scale-up uk-transition-opaque" src={"images/home/row-1-col-4.jpg"} alt="" />
        </div>
        <div className="uk-inline-clip uk-transition-toggle"> 
          <img className="uk-transition-scale-up uk-transition-opaque" src={"images/home/row-1-col-5.jpg"} alt="" />
        </div>
      </div>
      <div className="top uk-margin-large-top ">
        <h2>{text("home.top")}</h2>
        <section className="uk-flex uk-flex-between ">
          <div>
            <img
              src="https://cordis.europa.eu/docs/article/images/2020-11/422669.jpg"
              alt=""
            />
            <h3>Exponential grow</h3>
            <p>how the society has developed itself.</p>
            <section className="icons uk-flex uk-flex-center">
              <span uk-icon="icon: comment" />
              <p>23</p>
              <span uk-icon="icon: heart" />
              <p>53</p>
              <span uk-icon="icon: forward" />
            </section>
          </div>
          <div>
            <img
              src="https://cordis.europa.eu/docs/results/images/2021-04/429636.jpg"
              alt=""
            />
            <h3>Domaining cancer</h3>
            <p>New treatments which can be helpful.</p>
            <section className="icons uk-flex uk-flex-center">
              <span uk-icon="icon: comment" />
              <p>23</p>
              <span uk-icon="icon: heart" />
              <p>53</p>
              <span uk-icon="icon: forward" />
            </section>
          </div>
          <div>
            <img
              src="https://cordis.europa.eu/docs/results/images/2021-04/429632.jpg"
              alt=""
            />
            <h3>ReEvolution.</h3>
            <p>How we evolved in our fecundation.</p>
            <section className="icons uk-flex uk-flex-center">
              <span uk-icon="icon: comment" />
              <p>23</p>
              <span uk-icon="icon: heart" />
              <p>53</p>
              <span uk-icon="icon: forward" />
            </section>
          </div>
        </section>
      </div>
      <div className="triangle">
        <div className="start">{text("home.getStarted")}</div>
        <div className="sign">
          <section className="in">
            <Link to="/Login">{text("home.login")}</Link>
          </section>
          <section className="up">
            <Link to="/Register">{text("home.register")}</Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
