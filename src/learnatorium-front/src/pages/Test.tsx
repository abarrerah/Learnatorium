import React, { useEffect, useState } from 'react';
import * as api from './quiz/API';

import Quiz from './quiz/Quiz';

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
  };
  


function Test() {
    const [test,setTest]= useState([]);

    useEffect(() => {
        api.fetchQuizApi().then(res=>{setTest(res)})
    },[setTest]);

    return (
        
        <Quiz  setArray={test}></Quiz>
    )
}

export default Test
