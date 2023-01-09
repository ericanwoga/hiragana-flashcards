import React, { useState, useContext } from 'react';
import {StartMenuContext} from '../utils/Contexts';

import '../styles/Quiz.css';

function Quiz() {
    const {setPage, numOfQuestions, questionList} = useContext(StartMenuContext);
    const [currentQuestion, setCurrentQuestion] = useState(() => 1);

    return (
        <div className="Quiz">
            <div className='quiz-content'>
                <div className="quiz-title-box">
                    <h1 id="quiz-title">Question {currentQuestion}/{numOfQuestions}</h1>
                    <h2 id="quiz-subtitle">what is this character?</h2>
                </div>
                <div className='card-input-nav'>
                    <div className="quiz-card-box">
                        {questionList[currentQuestion - 1].hiragana}
                    </div>
                    
                    <input className="quiz-card-input" type="text" placeholder='answer'></input>
                    
                    <div className='quiz-nav'>
                        <button>prev</button>
                        <button>next</button>
                    </div>
                </div>
            </div>
        </div> 
     );
}
 
export default Quiz;