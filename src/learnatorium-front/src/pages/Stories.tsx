/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useState } from "react";

function Stories() {

  const [story,setStory] =useState<[]>([]);

  const apiURL= "http://localhost:8050/documents";

  const fetchData = async()=>{
    for(let i = 0; i < 3;i++){
      const response = await axios.get(apiURL);
      setStory(JSON.parse(JSON.stringify(response.data)));
    }

  
    for(let value of story){
      // @ts-ignore
      console.log(value.name);
    }
   
  }
   
  
  return (
      <div >
          <button onClick={fetchData}>del</button>
          <div >
            
          </div>
      </div>
  );
}

export default Stories;
