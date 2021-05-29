/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { match } from "react-router-dom";
import "../style/pages/story.css";

const Blog = (props: any) => {
  return (
    <div id="ContentBox">
      <h2 id="title">{props.data.name}</h2>
      <section className="uk-flex uk-flex-left uk-margin-left uk-margin-right" id="creation">
        <div className="uk-text-muted">Date creation: {props.data.creationDate}</div>
      </section>
      <section id="author" className="uk-flex uk-flex-right uk-margin-left uk-margin-right">
        <div className="uk-margin-right uk-text-muted">Author: {props.data.author}</div>
        <div className="uk-text-muted">ISBN validation: {props.data.isbn}</div>
      </section>
      <section id="content" className="uk-margin-large-top">
      <div>{props.data.content}</div>
      </section>
    </div>
  );
};

function contentData(content: any) {
  let value = Object.values(content);
  return value.map((info: any, idx: any) => {
    return <Blog data={info} key={idx}></Blog>;
  });
}

function story({ match }: { match: any }) {
  const [content, setContent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8050/document/" + match.params.id)
      .then((response) => {
        setContent(response.data);
      });
  }, [match.params.id]);
  contentData(content);
  return <div>{contentData(content)}</div>;
}

export default story;
