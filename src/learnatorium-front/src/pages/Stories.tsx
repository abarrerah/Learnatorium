/* eslint-disable @typescript-eslint/no-unused-expressions */
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./../style/pages/stories.css";

const Card = (props: any) => {

  return (
    <div className="card uk-card uk-card-default uk-card-hover uk-card-body uk-margin-auto uk-margin-bottom">
      <div className="uk-card-title">{props.data.name}</div>
      <div>{props.data.content}</div>
      <div id="show">{props.data.catName}</div>
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

  return (
    <div  id="mainContent">
      {cardData(posts)}
    </div>
  );
  
}

export default Stories;
