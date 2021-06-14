/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from "react";
import * as entry from "./env/entrypoints";
import "../style/pages/profile.css";
import Swal from "sweetalert2";

export class profile extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    this.renderMyData();
  }

  async renderMyData() {
    await fetch(entry.entrypointBack + "/user", {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then(async (res) => {
      this.setState({ data: await res.json() });
    });


  }

  render() {

    let state:number;

    const t=this.state.data.map((item:any)=>{
      return item.role;
      
    })
    state = t[0];

    const editProfile =()=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    }

    const toAdmin =()=>{
      window.location.href = entry.entrypointFront+"/Admin";
    }

    return (
      <div>
        <section className="headerContent"></section>
        <section className="profileZone">
          <div className="profilePic" />
          <div className="profileText uk-margin-top uk-margin-left uk-text-large">
            {this.state.data.map((item: any) => (
              <p >
                Welcome back {item.name}. Have a
                <span className="uk-text-success"> nice</span> day.
              </p>
            ))}
            <div className="uk-button-group">
        <button className="uk-button uk-button-primary uk-margin-right" onClick={editProfile}>Edit</button>
                

        {state === 10 && <button className="uk-button uk-button-danger uk-margin-right" onClick={toAdmin}>Admin Zone</button>}

        
    </div>
          </div>
        </section>
        <section id="formProfile" className="uk-container">
          <div id="cardProfile" className="uk-child-width-1-1@m" uk-grid>
            <div>
              <div className="uk-card uk-card-default">
                <div className="uk-card-media-top" id="cardInit">
                  <img
                    src="./images/vector1.jpg"
                    alt=""
                  />

                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default">
                <div className="uk-card-body">
                    What´s next?
                  <textarea className="uk-textarea"></textarea>
                  <button className="uk-button uk-button-primary uk-margin-right uk-margin-top">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" id="svg">
          <path
            fill="#227093"
            fill-opacity="1"
            d="M0,256L180,96L360,288L540,256L720,160L900,224L1080,224L1260,160L1440,32L1440,320L1260,320L1080,320L900,320L720,320L540,320L360,320L180,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  }
}

export default profile;
