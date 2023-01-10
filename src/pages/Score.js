import React from 'react'
import { useEffect, useState, useContext } from 'react';
import {GameContext} from '../utils/Contexts';
import '../styles/Score.css';

function Score() {
  const {setPage, questionList, userAnswerList, numOfQuestions} = useContext(GameContext);
  const [score, setScore] = useState();
  const restart = () =>{
    setPage("start-page");
  }

  useEffect(() => {
    //calculate score 
    let total = 0;

    for(let index = 0; index < numOfQuestions; index++){
      if(userAnswerList[index] === questionList[index].english){
        total++;
      }
    }

    setScore(total);

  }
  , [])

  return (
    <div className="Score">
            <div className='score-content'>
                <div className="score-title-box">
                    <h1 id="score-title">Score: {score}/{numOfQuestions}</h1>
                    <h2 id="score-subtitle">Summary</h2>
                </div>
                <div className='score-chart'>
                    
                </div>
            </div>
        </div> 
  );
}

export default Score