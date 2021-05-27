/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../style/pages/stories.css";

const Card = (props: any) => {
  return (
    <div className="card uk-card uk-card-default uk-card-hover uk-card-body uk-margin-auto uk-margin-bottom ">
      <div className="uk-card-header ">
        <div className="uk-grid-small uk-flex-middle" uk-grid>
          <div className="uk-width-expand">
            <h3 className="uk-card-title">{props.data.name}</h3>
          </div>
        </div>
      </div>
      <div className="uk-text-left uk-margin-left">{props.data.summary}</div>

      <div className="uk-card-footer">
        <div id="show" className="uk-text-capitalize uk-text-lighter uk-text-italic uk-text-primary">{props.data.catName}</div>
        <Link to={{pathname:'/story/'+ props.data.id}}  className="uk-button uk-button-text">Read More</Link>
      </div>
    </div>
  );
};

function cardData(posts: any) {
  let value = Object.values(posts);
  return value.map((info: any, idx: any) => {
    return <Card data={info} key={idx}></Card>;
  });
}

function Stories() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8050/documentsCat")
      .then((response) => setPosts(response.data));
  }, []);

  return <div id="mainContent">{cardData(posts)}</div>;
}

export default Stories;
