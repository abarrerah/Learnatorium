import axios from "axios";
import React, { useEffect, useState } from "react";
import './../style/pages/stories.css';

const Card = (props: any) => {
  return (
    <div >
      <div>{props.data.name}</div>
      <div>{props.data.content}</div>
    </div>
  );
};

function cardData(posts: any) {
  let value = Object.values(posts);
  return value.map((info: any, idx: any) => {
    return <Card data={info} key={idx}></Card>;
  });
};

function Stories() {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    axios
    .get("http://localhost:8050/documents")
    .then(response=>setPosts(response.data))
},[]);
  return (
    <div className="uk-flex" id="mainContent">
      {cardData(posts)}
    </div>
  )
}

export default Stories;
