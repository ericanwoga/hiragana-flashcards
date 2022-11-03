import dictionary from '../data/hiragana.json';
import React, { useState, useEffect, useContext } from 'react';
import {StartContext} from '../Contexts/StartContext';

import QuizCard from '../components/QuizCard';
import QuizInput from '../components/QuizInput';
import '../styles/Quiz.css';

function Quiz() {
    const {setPage, data, setData} = useContext(StartContext); /*So we can use setPage in this child component*/
    const [questionIndex, setquestionIndex] = useState(0); //index of question
    const [questionNumber, setQuestionNumber] = useState(1);

    //now our state has the absolute quiz questions
    const [quizQuestions, setQuizQuestions] = useState([]);

    useEffect(() => { //Calls function when page first renders... try to fux this
    let questionArray = [];
    let numberArray = [];

    //we want x random characters loaded from the data
    for (let i = 0; i < data.totalQuestions; i++){
        function randomNumber(min, max){
            return Math.floor(Math.random() * 104);
        } 

        //get a random number 
        let randomNum = randomNumber(0, 104);

        //check to see if it's NOT in the array already
        while (numberArray.includes(randomNum)) {
            randomNum = randomNumber(0, 104);
        }

        //add number to an array
        numberArray.push(randomNum);
    }

    questionArray = numberArray.map(num => dictionary.hiraganaDictionary[num])
    console.log("Question array is:", questionArray); //tester
    setQuizQuestions(questionArray); 
    setData({...data,questionList: questionArray}); //Send questions to parent

    }, []);

    return (
        <div className="Quiz">
            <div className="quiz-content">
                <div className="quiz-title-box">
                    <h1 id="quiz-title">{questionNumber}</h1>
                    <h2 id="quiz-subtitle">what is the hiragana below?</h2>
                </div>
                <div className='quiz-card-box'>
                    <h1 id="texttt">"hi"</h1>
                </div>
                <QuizInput />
                <button disable={questionNumber > data.totalQuestions ? true : false} 
                onClick={() => { setQuestionNumber(questionNumber + 1)}}>ooo</button>
            </div>
        </div> 
     );
}
 
export default Quiz;