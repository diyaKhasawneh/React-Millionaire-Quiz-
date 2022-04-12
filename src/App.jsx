import { useEffect, useMemo, useState } from "react";
import "./app.css"
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";
function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [username, setUserName] = useState(null);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Which of the following is the correct name of React.js?",
      answers: [
        {
          text: "React",
          correct: false,
        },
        {
          text: "React.js",
          correct: false,
        },
        {
          text: "ReactJS",
          correct: false,
        },
        {
          text: "All of the above",
          correct: true,
        },
      ],
    },
    {
      id: 2,
      question: "Which of the following acts as the input of a class-based component?",
      answers: [
        {
          text: "Props",
          correct: true,
        },
        {
          text: "Render",
          correct: false,
        },
        {
          text: "Factory",
          correct: false,
        },
        {
          text: "Class",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which of the following keyword is used to create a class inheritance?",
      answers: [
        {
          text: "Create",
          correct: false,
        },
        {
          text: "Inherits",
          correct: false,
        },
        {
          text: "This",
          correct: false,
        },
        {
          text: "Extends",
          correct: true,
        },
      ],
    },

    {
      id: 4,
      question: "What is the default port where webpack-server runs?",
      answers: [
        {
          text: "3000",
          correct: false,
        },
        {
          text: "3030",
          correct: false,
        },
        {
          text: "8080",
          correct: true,
        },
        {
          text: "6060",
          correct: false,
        },
      ],
    },

    {
      id: 5,
      question: "How many numbers of elements a valid react component can return?",
      answers: [
        {
          text: "1",
          correct: true,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "5",
          correct: false,
        },
      ],
    },


    {
      id: 6,
      question: "Does React.js create a VIRTUAL DOM in the memory?",
      answers: [
        {
          text: "FALSE",
          correct: false,
        },
        {
          text: "TRUE",
          correct: true,
        },
        {
          text: "Can be true or false",
          correct: false,
        },
        {
          text: "Cannot say",
          correct: false,
        },
      ],
    },

    {
      id: 7,
      question: "What does ES6 stand for?",
      answers: [
        {
          text: "EJavaScript 6",
          correct: false,
        },
        {
          text: "ECMAJavaScript 6",
          correct: false,
        },
        {
          text: "ECMAScript 6",
          correct: true,
        },
        {
          text: "ECMA 6",
          correct: false,
        },
      ],
    },

    {
      id: 8,
      question: "What does ES6 stand for?",
      answers: [
        {
          text: "inherits()",
          correct: false,
        },
        {
          text: "self()",
          correct: false,
        },
        {
          text: "this()",
          correct: false,
        },
        {
          text: "super()",
          correct: true,
        },
      ],
    },

    {
      id: 9,
      question: "Which of the following is used to pass data to a component from outside in React.js?",
      answers: [
        {
          text: "SetState",
          correct: false,
        },
        {
          text: "Props",
          correct: true,
        },
        {
          text: "Render with arguments ",
          correct: false,
        },
        {
          text: "PropTypes",
          correct: false,
        },
      ],
    },

    {
      id: 10,
      question: "Which of the following command is used to install create-react-app?",
      answers: [
        {
          text: "npm install create-react-app",
          correct: false,
        },
        {
          text: "npm install -f create-react-app",
          correct: false,
        },
        {
          text: "npm install -g create-react-app",
          correct: true,
        },
        {
          text: "install -g create-react-app",
          correct: false,
        },
      ],
    },

    {
      id: 11,
      question: "What of the following is used in React.js to increase performance?",
      answers: [
        {
          text: "Virtual DOM",
          correct: true,
        },
        {
          text: "Original DOM",
          correct: false,
        },
        {
          text: "Both A and B",
          correct: false,
        },
        {
          text: "None of the above.",
          correct: false,
        },
      ],
    },

    {
      id: 12,
      question: "What is the declarative way to render a dynamic list of components based on values in an array?",
      answers: [
        {
          text: "Using the reduce array method",
          correct: false,
        },
        {
          text: "Using the <Each /> component",
          correct: false,
        },
        {
          text: "With a for/while loop",
          correct: false,
        },
        {
          text: "Using the Array.map() method",
          correct: true,
        },
      ],
    },

    {
      id: 13,
      question: " How many ways of defining your variables in ES6?",
      answers: [
        {
          text: "1",
          correct: false,
        },
        {
          text: "3",
          correct: true,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "4",
          correct: false,
        },
      ],
    },

    {
      id: 14,
      question: " What are the two ways to handle data in React?",
      answers: [
        {
          text: "Services & Components",
          correct: false,
        },
        {
          text: "State & Props",
          correct: true,
        },
        {
          text: "State & Services",
          correct: false,
        },
        {
          text: "State & Component",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: " Do u love me XD :)?",
      answers: [
        {
          text: "yes",
          correct: true,
        },
        {
          text: "yes",
          correct: true,
        },
        {
          text: "yes",
          correct: true,
        },
        {
          text: "yes ",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(()=>
    [
      {id:1, amount:"$ 100"},
      {id:2, amount:"$ 200"},
      {id:3, amount:"$ 300"},
      {id:4, amount:"$ 500"},
      {id:5, amount:"$ 1000"},
      {id:6, amount:"$ 2000"},
      {id:7, amount:"$ 4000"},
      {id:8, amount:"$ 8000"},
      {id:9, amount:"$ 16000"},
      {id:10, amount:"$ 32000"},
      {id:11, amount:"$ 64000"},
      {id:12, amount:"$ 125000"},
      {id:13, amount:"$ 250000"},
      {id:14, amount:"$ 500000"},
      {id:15, amount:"$ 1000000"},
      
    ].reverse(),
  []) ;

useEffect(()=>{
questionNumber >1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber-1).amount);
},[moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {username ? (
        <>
         <div className="main">
      {stop ? (
      <h1 className="endText"> you earned:{earned}</h1>
      ) : (
        <>
      <div className="top">
        <div className="timer">
          <Timer setStop={setStop} questionNumber={questionNumber}/>
          </div>
      </div>
      <div className="bottom">
        <Trivia data={data}
         setStop={setStop}
          questionNumber={questionNumber}
           setQuestionNumber={setQuestionNumber}/>
      </div> 
      </>
          )}
    </div>
    <div className="pyramid">
      <ul className="moneyList">
        {moneyPyramid.map(m=>(

    
      <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
        <span className="monyListItemNumber">{m.id}</span>
        <span className="monyListItemAmount">{m.amount}</span>
      </li>
        ))}
      
      
      </ul>
    </div>
        </>
      ) : <Start setUserName={setUserName}/>}
   
    </div>
  );
}

export default App;
