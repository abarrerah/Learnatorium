import React from "react";
import "../style/pages/home.css";
import { Link } from "react-router-dom";

const imagePath = "images/home/row-1-col-1.jpg";
const style = { backgroundImage: `url('file://${imagePath}')` };

function Home() {
  
  

  return (
    <div className="main-home">
      <div className="text">
        <div className="main-text">
          <h1 className="uk-text-italic">Learnatorium</h1>
          <h3>
            Perfect Synergy of <span>Learn and have fun.</span>
          </h3>
          <p>
            Knowledge is one of the most values keys that human have it to
            improve their future develop and keep making such amazing hits like
            we did in our past.
          </p>
          <p>
            For centuries, the information was one of the elements more
            preciated and exclusives which only a few had the fortune to access
            it and this place is to avoid that, is for share those with you!
          </p>
          <div className="explore uk-flex ">
            <span uk-icon="icon : triangle-right"></span>
            <h4>Explore Content.</h4>
          </div>
        </div>
      </div>
      <div className="image ">
        <div style={style}>
          <img src={"images/home/row-1-col-1.jpg"} alt="" />
        </div>
        <div>
          <img src={"images/home/row-1-col-2.jpg"} alt="" />
        </div>
        <div>
          <img src={"images/home/row-1-col-3.jpg"} alt="" />
        </div>
        <div>
          <img src={"images/home/row-1-col-4.jpg"} alt="" />
        </div>
        <div>
          <img src={"images/home/row-1-col-5.jpg"} alt="" />
        </div>
      </div>
      <div className="top uk-margin-large-top ">
        <h2>Top 3 of the week.</h2>
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
        <div className="start">Get started</div>
        <div className="sign">
          <section className="in">
            <Link to="/Login">Sign In</Link>
          </section>
          <section className="up">
            <Link to="/Register">Sign Up</Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
