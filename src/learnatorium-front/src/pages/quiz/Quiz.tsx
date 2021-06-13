import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "../../style/pages/quiz/quiz.css";

import Card from "./Card";
let i = 0;

const Quiz = (props: { setArray: any[] }) => {
  const [text] = useTranslation("global");

  const [element, setElement] = useState([]);

  const handle = () => {
    let button = document.getElementById("nextQuestion")!;
    button.classList.remove("uk-position-center");
    button.classList.remove("uk-tile");
    button.classList.remove("uk-tile-primary");
    button.classList.add("uk-button");
    button.classList.add("uk-button-primary");
    button.classList.add("uk-margin-left");
    button.classList.add("uk-margin-top");
    button.classList.remove("uk-height-medium")
    button.innerHTML = text("test.buttonNext");

    let ocean = document.getElementById("ocean");
    if(ocean !== null){
      ocean.remove();
    }
    

    i = i + 1;
    if (i === 15) {
      i = 0;
    }
    setElement(props.setArray[i]);
  };

  return (
    <div >
      <button
        onClick={handle}
        id="nextQuestion"
        className="uk-button uk-button-primary uk-button-large uk-height-medium uk-position-center uk-text-bolder uk-text-large uk-border-rounded"
      >
        {text("test.buttonInit")}
      </button>
      <Card setElement={element} />
      <div className="ocean" id="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
};

export default Quiz;
