/* eslint-disable array-callback-return */
import React, { Component } from "react";

export default class Stories extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    await fetch("http://localhost:8050/documents")
      .then((response) =>
        response.json().then((result) => {
          this.setState(result);
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    const result23 = JSON.parse(JSON.stringify(this.state));

    return (
      <div className="uk-child-width-1-2@s uk-grid-match" uk-grid>
        {Object.keys(result23).map((element) => {
          return (
            <div className="uk-card uk-card-hover uk-card-body">
              <div className="uk-card-title">{result23[element].name}</div>
              <p>{result23[element].content}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
