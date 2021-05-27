/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { match} from "react-router-dom";

const Blog=(props:any)=>{
  return(
    <div>
      <h3>{props.data.name}</h3>
      <p>{props.data.content}</p>
    </div>
    
  )
}

function contentData(content:any){
  let value= Object.values(content);
  return value.map((info:any,idx:any)=>{
    return <Blog data={info} key={idx}></Blog>
  })
}


function story({ match }: { match: any }) {
  const [content, setContent] = useState([]);
  useEffect(()=>{
    axios
        .get("http://localhost:8050/document/"+match.params.id)
        .then((response)=>{
          setContent(response.data);
        });
  },[match.params.id]);
  contentData(content);
  return (
    <div>
      {contentData(content)}
    </div>
  );
}

export default story;

