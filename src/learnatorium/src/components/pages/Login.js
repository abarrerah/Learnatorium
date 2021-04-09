import React from "react";
import "./styles/login.css";
function Login() {
  function handleClick(e) {    e.preventDefault();    console.log('The link was clicked.');  }
  return (
    <div className="container">
      <div className="leftSide">
        <h2>Learnatorium</h2>
        <h4 id="whiteHeader">
          Join us and start to share your knowledge with our community!
        </h4>
        <div className="h6">
          <h6>
            We are different than others, you won't find anything similar to us.
          </h6>
          <h6>
            Also, we are not going to spot marketing, spam or commercials ads
            for our interest, only our work comming from real people ,
            <span> AS YOU!.</span>
          </h6>
        </div>
        <h4>Know more about us!</h4>
        <button className="uk-button uk-button-secondary uk-button-large">
          Sign Up
        </button>
      </div>

      <div className="rightSide">
        <div className="Sites">
          <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" id="facebook">
            <span uk-icon="facebook"></span>
            Facebook
          </button>
          <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" id="google">
            <span uk-icon="google"></span>
            Google
          </button>
          <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" id="twitch">
            <span uk-icon="twitch"></span>
            Twitch
          </button>
          <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" id="twitter">
            <span uk-icon="twitter"></span>
            Twitter
          </button>
        </div>
        <div className="Credentials">
          <h3>Login to your account</h3>

          <div className="uk-margin">
            <div className="uk-inline">
              <span class="uk-form-icon" uk-icon="icon: user"></span>
              <input
                class="uk-input uk-form-width-large"
                type="text"
                placeholder="User"
              />
            </div>
          </div>
          <div class="uk-margin">
            <div class="uk-inline">
              <span class="uk-form-icon" uk-icon="icon: lock"></span>
              <input
                class="uk-input uk-form-width-large"
                type="text"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="uk-flex">
            <button class="uk-button uk-button-default">log in</button>
            <a href="#" onClick={handleClick}>Forgotten password?</a>
          </div>
        </div>
        <div className="extra">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
