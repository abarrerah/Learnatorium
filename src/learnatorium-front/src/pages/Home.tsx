import React from "react";
import "../style/pages/home.css";

const imagePath= 'images/home/row-1-col-1.jpg';
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
        <img src={'images/home/row-1-col-1.jpg'} alt=""/>
        </div>
        <div>
        <img src={'images/home/row-1-col-2.jpg'} alt=""/>
        </div>
        <div>
        <img src={'images/home/row-1-col-3.jpg'} alt=""/>
        </div>
        <div>
        <img src={'images/home/row-1-col-4.jpg'} alt=""/>
        </div>
        <div>
        <img src={'images/home/row-1-col-5.jpg'} alt=""/>
        </div>
      </div>
      <div className="top uk-margin-large-top ">
      <h2>Top 3 of the week.</h2>
      <section className="uk-flex uk-flex-middle">
        <div>ds</div>
        <div>asd</div>
        <div>asd</div>
      </section>
       
      </div>
      <div className="triangle">triangle</div>
    </div>
  );
}

export default Home;
