/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from "react";
import "../style/pages/register.css";
function signUp() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email,setEmail]=useState("");
  const [user,setUser] = useState("");
  const [password,setPassword] = useState("");
  const [rPassword,setPasswordR] = useState("");

  function handleSubmit(e: { preventDefault: () => void; }) {
    console.log(email,user,password,rPassword)
    e.preventDefault();
    setEmail("");
    setUser("");
    setPassword("");
    setPasswordR("");
  }

  return (
    <div>
      <section className="signUp">
        <h2 className="uk-heading-medium uk-text-bold uk-text-muted uk-text-capitalize uk-text-center">
          sign <span className="uk-text-primary">up!</span>
        </h2>
        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon" uk-icon="icon: mail"></span>
            <input className="uk-input" type="text" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon" uk-icon="icon: user"></span>
            <input className="uk-input" type="text" placeholder="Username" value={user} onChange={(e)=> setUser(e.target.value)}/>
          </div>
        </div>

        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon" uk-icon="icon: lock"></span>
            <input
              className="uk-input uk-form-danger"
              type="password"
              placeholder="Password"
              value={password} onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="uk-margin">
          <div className="uk-inline">
            <span className="uk-form-icon" uk-icon="icon: lock"></span>
            <input
              className="uk-input uk-form-danger"
              type="password"
              placeholder="Repeat password"
              value={rPassword} onChange={(e)=> setPasswordR(e.target.value)}
            />
          </div>
        </div>
        <section className="uk-flex">
       
        <input type="submit" className="uk-button uk-button-primary" value="Submit"></input>
        <input type="reset" className="uk-button uk-button-danger uk-margin-left uk-width-1-5" value="Clear" onClick={handleSubmit}></input>
        
        </section>
        <p>Clicking submit it means you, as user, had read and accepted all our present terms , use condition and privacy politics about the website, owned by Learnatorium develop team. </p>
        <p>Access and use of this website is the responsability of the user, who must follow the rules of coexistence and the terms and conditions of use that have been previously accepted.</p>
        <h3>Enjoy your stay.</h3>
      </section>
    </div>
  );
}

export default signUp;
