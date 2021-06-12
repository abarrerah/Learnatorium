import React, { useState } from "react";

import Card from "./Card";
let i = 0;

const Quiz = (props: { setArray: any[] }) => {
    

  const [element,setElement] = useState([]); 


  const handle = () => {
    i = i + 1;
    if (i === 15) {
      i = 0;
    }
    setElement(props.setArray[i]);
  };

  return (
    <div>
      <button onClick={handle}>Empezar</button>
      <Card setElement={element} />
    </div>
  );
};

export default Quiz;
