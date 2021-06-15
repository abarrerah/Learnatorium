/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../style/pages/stories.css";

import swal from "sweetalert";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

import {entrypointBack} from './env/entrypoints';

const swalButton = async () => {
  const result = await fetch( entrypointBack +"/user", {
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  result.json().then(async (e) => {
    if (e.toString().length < 3) {
      swal("Oops!", "You have to be logged in to create a Story!", "error");
    } else {
      const { value: formValues } = await Swal.fire({
        title: "Multiple inputs",
        html:
          '<label>Name</label><input id="swal-input1" class="swal2-input" required>' +
          '<label>Summary</label><input id="swal-input2" class="swal2-input" required>' +
          '<label>Content</label><textarea  id="swal-input3" class="swal2-input" required>',
        focusConfirm: false,
        preConfirm: () => {
          return [
            // @ts-ignore: Object is possibly 'null'.
            document.getElementById("swal-input1").value,
            // @ts-ignore: Object is possibly 'null'.
            document.getElementById("swal-input2").value,
            // @ts-ignore: Object is possibly 'null'.
            document.getElementById("swal-input3").value,
          ];
        },
      });
      let jsonData= JSON.parse(JSON.stringify(formValues));
 
      
     if(JSON.stringify(jsonData[0]).length>2 && JSON.stringify(jsonData[1]).length>2 && JSON.stringify(jsonData[2]).length>2){

      await fetch( entrypointBack+"/document/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ 
          name:jsonData[0],
          summary:jsonData[1],
          content:jsonData[2],
         }),
      }).then(res=>{
        if(res.status ===201){
          swal("Element Created!", "Your new story is on our database! Please, reload the page and u were able to see it", "success");
        }
      });
    }else{
      swal("Some fields are empty!", "You are trying to send content without info , and that is pretty bad.", "error");
    }}
  });
};

const Card = (props: any) => {
  const [text]= useTranslation("global");
  return (
    <div className="card uk-card uk-card-default uk-card-hover uk-card-body uk-margin-auto uk-margin-bottom ">
      <div className="uk-card-header ">
        <div className="uk-grid-small uk-flex-middle">
          <div className="uk-width-expand">
            <h3 className="uk-card-title">{props.data.name}</h3>
          </div>
        </div>
      </div>
      <div className="uk-text-left uk-margin-left">{props.data.summary}</div>

      <div className="uk-card-footer">
        <div
          id="show"
          className="uk-text-capitalize uk-text-lighter uk-text-italic uk-text-primary"
        >
          {props.data.catName}
        </div>
        <Link
          to={{ pathname: "/story/" + props.data.id }}
          className="uk-button uk-button-text"
        >
          {text("stories.cards.link")}
        </Link>
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

  const [text]= useTranslation("global");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get( entrypointBack+"/documentsCat")
      .then((response) => setPosts(response.data));
  }, []);

  return (
    <div>
      <button className="uk-button uk-margin-large-top uk-margin-left" onClick={swalButton}>
      {text("stories.storyButton")}
      </button>
      <div id="mainContent">{cardData(posts)}</div>
    </div>
  );
}

export default Stories;
