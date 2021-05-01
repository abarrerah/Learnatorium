import React from "react";
import "../style/pages/Login.css";
import { Link } from "react-router-dom";
function signIn() {
  return (
    <div className="login uk-flex">
      <section>
        <h2>Learnatorium</h2>
        <h4>Join us and start to share your knowledge with our community!</h4>
        <p>
          we are differents from the rest, you won´t find anything similar to
          Learnatorium.
        </p>
        <p>
          Also, you are not going to spot marketing, spam or commecials
          ads!.Only our work and real people , as YOU!
        </p>

        <h6>Know More about it !</h6>
        <div>
          <button className="uk-button"><Link to="/Register">Sign Up</Link></button>
        </div>
      </section>
      <section>
        <div className="oAuth uk-flex uk-flex-column uk-flex-middle">
          <button className="uk-button uk-button-large facebook uk-width-1-3 uk-margin-bottom uk-margin-top">
            <span uk-icon="icon: facebook"></span>
            Facebook
          </button>
          <button className="uk-button google uk-width-1-3 uk-margin-bottom uk-margin-bottom">
            <span uk-icon="icon: google"></span>
            Google
          </button>
          <button className="uk-button twitter uk-width-1-3 uk-button-large uk-margin-bottom">
            <span uk-icon="icon: twitter"></span>
            Twitter
          </button>
          <button className="uk-button twitch uk-width-1-3 uk-button-large">
            <span uk-icon="icon: twitch"></span>
            Twitch
          </button>
        </div>
        <div className="Login uk-margin-large-top  ">
          <h3>Login to your account</h3>
          <div className="uk-margin">
            <input
              className="uk-input uk-form-width-large"
              type="text"
              placeholder="Email or Username"
            />
            
            <input
              className="uk-input uk-form-width-large uk-margin-top"
              type="password"
              placeholder="Password"
            />
            <button className="uk-button uk-button-primary uk-margin-top">Submit</button>
          </div>
        </div>
        <div className="info">
            Por motivos de privacidad, utilizamos cookies propias para garantizar la mejor experiencia posible.
            <br></br>
            En caso de robo o sustracción de información de su cuenta de usuario, el equipo de desarrollo de Learnatorium no se hará cargo de las responsibilidades que usted debería haber tomado previamente ya que hemos implementado todas las medidas posibles para que no ocurra.
        </div>
      </section>
    </div>
  );
}

export default signIn;
