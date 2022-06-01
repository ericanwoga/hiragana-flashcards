import dictionary from '../data/hiragana.json';
import { useState, useEffect } from 'react';
import QuizCard from '../components/QuizCard';
import QuizInput from '../components/QuizInput';
import '../styles/Quiz.css';

const Quiz = ({questionAmount}) => {
    const [quizScore, setQuizScore] = useState(0);

    //now our state has the absolute quiz questions
    const [quizQuestions, setQuizQuestions] = useState([]);

    useEffect(() => {
    let questionArray = [];
    let numberArray = [];

    //we want x random characters loaded from the data
    for (let i = 0; i < questionAmount; i++){
        function randomNumber(min, max){
            return Math.floor(Math.random() * 104);
        } 

        let randomNum = randomNumber(0, 104);

        //find a randmom number not in the array
        while (numberArray.includes(randomNum)) {
            randomNum = randomNumber(0, 104);
        }

        //add number to an array
        numberArray.push(randomNum);
    }

    questionArray = numberArray.map(num => dictionary.hiraganaDictionary[num])
    console.log("Question array is:", questionArray);
    setQuizQuestions(questionArray); 

    }, []);

    return (
        <div className="Quiz">
            <div className="quiz-content">
                <div className="quiz-title-box">
                    <h1 id="quiz-title">{quizScore} <span id="out-of-qAmount"> / {questionAmount}</span></h1>
                </div>
                <QuizCard />
                <QuizInput />
            </div>
        </div> 
     );
}
 
export default Quiz;