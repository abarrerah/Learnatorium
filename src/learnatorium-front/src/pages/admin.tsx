/* eslint-disable react-hooks/rules-of-hooks */
// @ts-ignore: Object is possibly 'null'.
import * as React from "react";
import { useState,useEffect } from "react";
import "../style/pages/admin.css";

function admin() {

  const [name, setName] = useState('');
  async function fetchData(){
    const res= await fetch('http://localhost:8000/source/all',{ 
      headers:{
        'Content-Type': 'application/json',
        credentials: 'include',
      }
    })
    res.json().then(res=>setName(res))
  }
  

  useEffect(()=>{
    fetchData();
  },[])

  const [mia, setMia] = useState(0);

  function users(e: { preventDefault: () => void }) {
    setMia(1);
  }
  function documents(e: { preventDefault: () => void }) {
    setMia(2);
  }
  function Test(e: { preventDefault: () => void }) {
    setMia(3);
  }
  function Theme(e: { preventDefault: () => void }) {
    setMia(4);
  }
  function Categories(e: { preventDefault: () => void }) {
    setMia(5);
  }
  function Source(e: { preventDefault: () => void }) {
    setMia(6);
  }
  function Chapter(e: { preventDefault: () => void }) {
    setMia(7);
  }
  let menu;
  

  switch (mia) {
    case 1:
      menu = "<div>User</div>";
      const output2 = document.getElementById('mostrar');
      if (output2) output2.innerHTML = menu.toString()
      break;
    case 2:
      menu = <div>documents</div>;
      console.log("documents");
      break;
    case 3:
      menu = <div>test</div>;
      console.log("Test");
      break;
    case 4:
      menu = <div>theme</div>;
      console.log("theme");
      break;
    case 5:
      menu = <div>categorias</div>;
      console.log("categories");
      break;
    case 6:
      menu="<div>"
      for(let i =0;i<name.length;i++){
        const element=JSON.parse(JSON.stringify(name[i]));
        console.log(element.ISBN)
        menu +=element.ISBN+"<br>";
        
      }
      menu+="</div>";
      const output = document.getElementById('mostrar');
    if (output) output.innerHTML = menu.toString()
      
      break;
    case 7:
      menu = <div>chapter</div>;
      console.log("chapter");
      break;
  }
  return (
    <div>
      <div className="headerAdmin uk-heading-small uk-text-bold uk-text-muted">
        Admin panel
      </div>
      <button
        className="uk-margin-left uk-margin-right"
        value={mia}
        onClick={users}
      >
        Users
      </button>
      <button
        className="uk-margin-left uk-margin-right"
        value={mia}
        onClick={documents}
      >
        Documents
      </button>
      <button
        className="uk-margin-left uk-margin-right"
        value={mia}
        onClick={Test}
      >
        Test
      </button>
      <button
        className="uk-margin-left uk-margin-right"
        value={mia}
        onClick={Theme}
      >
        Theme
      </button>
      <button
        className="uk-margin-left uk-margin-right"
        value={mia}
        onClick={Categories}
      >
        Categories
      </button>
      <button
        className="uk-margin-left uk-margin-right"
        value={mia}
        onClick={Source}
      >
        Source
      </button>
      <button
        className="uk-margin-left uk-margin-right"
        value={mia}
        onClick={Chapter}
      >
        Chapter
      </button>
      <section className="show">     
       <section id="mostrar"></section>
      </section>
      
    </div>
  );
}

export default admin;


