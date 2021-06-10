
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import * as entrypoint from './env/entrypoints';
import '../style/pages/profile.css';


function profile() {
    let [user,setUser]=useState([]);
    window.addEventListener("load", async () => {
        
        const result = await fetch(entrypoint.entrypointBack+"/user", {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        result
          .json()
          .then((e) => {
              setUser(e[0]);

          })
      });
    
      console.log(user);
      let d= document.getElementById("hola");
      console.log(d?.nodeValue);
      if(d?.nodeValue === null){
       
      }
      let us= JSON.parse(JSON.stringify(user));
    return (
        <div>
            <section className="headerContent">
                

            </section>
            <section className="profileZone">
                    <div className="profilePic">
                        
                    </div>
                    <div className="profileText uk-margin-large-top uk-margin-large-left uk-heading-medium" id="hola">{us.name}</div>
            </section>
        </div>
    )
}

export default profile;
