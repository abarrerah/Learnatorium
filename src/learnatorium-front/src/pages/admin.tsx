/* eslint-disable react-hooks/rules-of-hooks */
// @ts-ignore: Object is possibly 'null'.
import * as React from "react";
import { useState } from "react";
import axios from 'axios';
import "../style/pages/admin.css";

function admin() {

  const [name, setName] = useState('');

  function getSources(){
    axios.get('http://localhost:8000/source/all')
    .then(res=>{
      setName(res.data)
    })
  }

  function getUsers(){
    axios.get('http://localhost:8000/users')
    .then(res=>{
      setName(res.data)
    })
  }

  const [mia, setMia] = useState(0);

  function users(e: { preventDefault: () => void }) {
    getUsers();
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
    getSources(); 
    setMia(6);
  }
  function Chapter(e: { preventDefault: () => void }) {
    setMia(7);
  }
  let menu;
  

  switch (mia) {
    case 1:
      menu="<div><table><tr><th>ID</th><th>NAME</th><th>EMAIL</th><th>ROLE</th></tr>";
      for(let i=0;i<name.length;i++){
        const element=JSON.parse(JSON.stringify(name[i]));
        console.log(element)

        switch(element.role){
          case 1:
            menu +="<tr><td>"+element.id+"</td><td>"+element.name+"</td><td>"+element.email+"</td><td>Standard User</td></tr>";
            break;
          case 2:
            menu +="<tr><td>"+element.id+"</td><td>"+element.name+"</td><td>"+element.email+"</td><td>Premium User</td></tr>";
            break;  
          case 3: 
            menu +="<tr><td>"+element.id+"</td><td>"+element.name+"</td><td>"+element.email+"</td><td>Admin User</td></tr>";
            break;
          case 4:  
            menu +="<tr><td>"+element.id+"</td><td>"+element.name+"</td><td>"+element.email+"</td><td>Banned User</td></tr>";
            break;  
        }
       
      }
      menu+="</table></div>";
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
      menu="<div><table><tr><th>ID</th><th>ISBN</th><th>Creation Date</th><th>Validation Date</th></tr>"
      for(let i =0;i<name.length;i++){
        const element=JSON.parse(JSON.stringify(name[i]));

        menu +="<tr><td>"+element.id+"</td><td>"+element.ISBN+"</td><td>"+element.Creation.toString().slice(0,19).replace('T00:00:00',' ')+"</td><td>"+element.Validation.toString().slice(0,19).replace('T00:00:00',' ')+"</td></tr>";

      }
      menu+="</table></div>";
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
        className="uk-margin-left uk-margin-right uk-button-primary"
        value={mia}
        onClick={users}
      >
        Users
      </button>
      <button
        className="uk-margin-left uk-margin-right uk-button-primary"
        value={mia}
        onClick={documents}
      >
        Documents
      </button>
      <button
        className="uk-margin-left uk-margin-right uk-button-primary"
        value={mia}
        onClick={Test}
      >
        Test
      </button>
      <button
        className="uk-margin-left uk-margin-right uk-button-primary"
        value={mia}
        onClick={Theme}
      >
        Theme
      </button>
      <button
        className="uk-margin-left uk-margin-right uk-button-primary"
        value={mia}
        onClick={Categories}
      >
        Categories
      </button>
      <button
        className="uk-margin-left uk-margin-right uk-button-primary"
        value={mia}
        onClick={Source}
      >
        Source
      </button>
      <button
        className="uk-margin-left uk-margin-right uk-button-primary"
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


