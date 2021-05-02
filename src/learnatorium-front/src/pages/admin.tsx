/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import { useState } from "react";
import "../style/pages/admin.css";

function admin() {
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
  // if(mia==="hola"){
  //     console.log("verdad");
  //     menu=(
  //         <div>hola</div>
  //     );
  // }else if(mia==="nope"){
  //     console.log("verdad a medias")
  //     menu=(
  //         <div>adios</div>
  //     );
  // }else{
  //     console.log("mentira cochina")
  //     menu=(
  //         <div>hasta luego</div>
  //     );
  // }

  switch (mia) {
    case 1:
      menu = <div>user</div>;
      console.log("user");
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
      menu = <div>source</div>;
      console.log("source");
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
      <section>{menu}</section>
    </div>
  );
}

export default admin;
