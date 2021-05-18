
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

function Stories() {
    const [name, setName] = useState("");
    useEffect(()=>{fetch("http://localhost:8050/documents", {
    }).then((res) => {
      res.json()
      .then((result) => setName(result));
    });},[])

  let cards="<div className='uk-child-width-1-2@s uk-grid-match' uk-grid>";

  

  for(let i=0;i<name.length;i++){
    const element = JSON.parse(JSON.stringify(name[i]));
    cards+=" <div><div className='uk-card uk-card-hover uk-card-body'><h3 className='uk-card-title'>"+element.name+"</h3></div></div>";
  }
  cards+="</div>";

  const output = document.getElementById("mostrar");
  if (output) output.innerHTML = cards.toString();
  return (
      <div id="mostrar">
        
      </div>
  );
}

export default Stories;
