
export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
  };
  

export type QuestionState = Question & {answers:string[]};

const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

export const fetchQuizApi = async()=>{
    
    const endpoint = "https://opentdb.com/api.php?amount=15&type=multiple";

    const data = await (await fetch(endpoint)).json();

    return data.results.map((question:Question)=>({
        ...question,
        answers: shuffleArray([...question.incorrect_answers,question.correct_answer])
    }))
};