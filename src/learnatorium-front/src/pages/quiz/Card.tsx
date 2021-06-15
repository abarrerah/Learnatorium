import React from "react";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import '../../style/pages/quiz/card.css'

let cont = 0;

function Card(props: { setElement: any[] }) {
  const [text] = useTranslation("global");
  let elms = JSON.parse(JSON.stringify(props.setElement));

  const greet = (els: any) => {
    if (els === 0) {
      return (
        <div >
          <h1 id="begin">{text("test.quiz.welcoming")}</h1>
        </div>
      );
    } else {
      console.log(elms.correct_answer);

      const showInfo = (event: any) => {
        var elem = document.getElementById(event.target.id)!;
        var txt = elem.textContent || elem.innerText;

        if (txt === elms.correct_answer) {
          cont++;
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Nice One! :D",
            showConfirmButton: false,
            timer: 1500,
          });

          var button = document.getElementById("nextQuestion")!;
          button.click();
        } else {
          cont--;
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Incorrect answer :(",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      };

      return (
        <div className="uk-container uk-height-max-large  uk-overflow-auto" id="cardContainer" >
          <h1>{elms.question}</h1>
          <div className="uk-flex uk-flex-around">
            <h2 className="uk-margin-remove uk-text-small">{elms.category}</h2>
            <h2 className="uk-margin-remove uk-text-small">{elms.difficulty}</h2>
            <h2 className="uk-margin-remove uk-text-small">{cont}</h2>
          </div>
          <hr className="uk-divider-icon"/>
          <section className="uk-child-width-expand@s" uk-grid >
            <button  className="uk-width-1-2@m uk-height-small uk-margin uk-margin uk-button-default" onClick={showInfo} id="myButton1" >
              {elms.answers[0]}
            </button>
            <button className="uk-width-1-2@m uk-height-small uk-margin uk-button-primary" onClick={showInfo} id="myButton2">
              {elms.answers[1]}
            </button>
            <button className="uk-width-1-2@m uk-height-small uk-margin uk-button-secondary" onClick={showInfo} id="myButton3">
              {elms.answers[2]}
            </button>
            <button className="uk-width-1-2@m uk-height-small uk-margin uk-button-danger" onClick={showInfo} id="myButton4">
              {elms.answers[3]}
            </button>
          </section>
        </div>
      );
    }
  };

  return greet(elms.length);
}

export default Card;
