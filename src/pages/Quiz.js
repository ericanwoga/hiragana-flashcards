import React, { useState, useContext } from 'react';
import {StartMenuContext} from '../utils/Contexts';

import '../styles/Quiz.css';

function Quiz() {
    const {setPage, numOfQuestions, questionList} = useContext(StartMenuContext);
    const [currentQuestion, setCurrentQuestion] = useState(1);

    return (
        <div className="Quiz">
            <div className='quiz-content'>
                <div className="entire-title">
                    <h1 id="quiz-title">Question {currentQuestion}/{numOfQuestions}</h1>
                    <h2 id="quiz-subtitle">what is this character?</h2>
                    <div className='card-and-input'>
                        <div className="quiz-card-box">
                            {questionList[currentQuestion - 1].hiragana}
                        </div>
                        
                        <input type="text" placeholder='answer'></input>
                        
                    </div>
                </div>
            </div>
        </div> 
     );
}
 
export default Quiz;