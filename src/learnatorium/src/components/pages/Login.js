import React from "react";
import "./styles/login.css";
function Login() {
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
            for our interest, only our work comming from real people ,{" "}
            <span>AS YOU!.</span>
          </h6>
        </div>
        <h4>Know more about us!</h4>
        <button>Sign Up</button>
      </div>
      <div className="rightSide">
        
      </div>
    </div>
  );
}

export default Login;
