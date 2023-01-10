import React, { useState, useContext, useEffect, useRef } from 'react';
import {GameContext} from '../utils/Contexts';

import '../styles/Quiz.css';

function Quiz() {
    const {setPage, numOfQuestions, questionList, userAnswerList, setUserAnswerList} = useContext(GameContext);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    
    const inputBox = useRef(null);

    useEffect(() => {
        setUserAnswerList(Array(numOfQuestions).fill(""));
    }, [])

    useEffect(() => {
        //each time you encounter a new question, make input blank
        if(userAnswerList[currentQuestion - 1] === ""){
            inputBox.current.value = "";
        }else{
            //if the user already answered, keep the answer 
            inputBox.current.value = userAnswerList[currentQuestion - 1];
        }
    }, [currentQuestion, userAnswerList])

    const prev = () => {
        if(currentQuestion !== 1){
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    const next = () => {
        if(currentQuestion !== numOfQuestions){
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    const score = () => {
        setPage("score-page"); //change the page 
    }

    const record = (event) => {
        //set the user's input as an object
        let newArray = [...userAnswerList];
        newArray[currentQuestion - 1] = event.target.value;
        setUserAnswerList(newArray);
    }

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
                    
                    <input className="quiz-card-input" ref={inputBox}
                    type="text" placeholder='answer' onChange={record}></input>
                    
                        {(currentQuestion === 1) && 
                        <div className='quiz-nav'>
                            <div></div>
                            <button onClick={next}>next</button>
                        </div>}
                        
                        {(currentQuestion === numOfQuestions) && 
                        <div className='quiz-nav'>
                            <button onClick={prev}>prev</button>
                            <button onClick={score}>finish quiz</button>
                        </div>}               
                        
                        {((currentQuestion !== 1) && (currentQuestion !== numOfQuestions)) ? 
                        <div className='quiz-nav'>
                            <button onClick={prev}>prev</button>
                            <button onClick={next}>next</button>
                        </div> : null}
                </div>
            </div>
        </div> 
     );
}
 
export default Quiz;