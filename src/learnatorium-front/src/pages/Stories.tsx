/* eslint-disable array-callback-return */
import React, { Component } from "react";
import './../style/pages/stories.css';

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
    const result = JSON.parse(JSON.stringify(this.state));

    return (
      <div id="dek">
        <section className="filter">dfgdfgdfgdfg</section>
        {Object.keys(result).map((element) => {
          
          return (  
              <div className="uk-card uk-card-hover uk-card-body">
                <div className="uk-card-title">{result[element].name}</div>
                <p>{result[element].content}</p>
              </div>

          );
        })}
      </div>
    );
  }
}
