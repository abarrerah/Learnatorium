/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from "react";
import * as entry from "./env/entrypoints";
import "../style/pages/profile.css";

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

    console.log(this.state);
  }

  render() {
    return (
      <div>
        <section className="headerContent"></section>
        <section className="profileZone">
          <div className="profilePic" />
          <div className="profileText uk-margin-top uk-margin-left uk-heading-medium">
            {this.state.data.map((item: any) => (
              <p>
                Welcome back {item.name}. Have a{" "}
                <span className="uk-text-success">nice</span> day.
              </p>
            ))}
          </div>
        </section>
        <section id="formProfile" className="uk-container">
          <div id="cardProfile" className="uk-child-width-1-1@m" uk-grid>
            <div>
              <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                  <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/1fR5Y7KaK9puRmCDaIof7j/09e2b2b9eaf42d450aba695056793607/vector1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default">
                <div className="uk-card-body">
                    
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
