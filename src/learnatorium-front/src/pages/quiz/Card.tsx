import React from "react";

function Card(props: { setElement: any[] }) {
  let elms = JSON.parse(JSON.stringify(props.setElement));

  const greet = (els: any) => {
    console.log(els);
    if (els === 0) {
      return (
        <div>
          <h1>Dale a empezar</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>{elms.category}</h1>
          <h2>{elms.difficulty}</h2>
        </div>
      );
    }
  };

  return greet(elms.length);
}

export default Card;
