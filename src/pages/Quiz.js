import dictionary from '../data/hiragana.json';
import { useState, useEffect } from 'react';
import '../styles/Start.css';

const Quiz = ({questionAmount}) => {
    let questions = [];
    useEffect(() => { //want this to run ONLY when the page loads
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

        questions = numberArray.map(num => dictionary.hiraganaDictionary[num])
        console.log(questions);
        
    }, [questionAmount]);

    //now our state has the absolute quiz questions
    const [quizQuestions, setQuizQuestions] = useState(questions);

    return ( 
        <div>
            <h1>Hi there</h1>
            <h2>I'm a number {questionAmount} </h2>
            <h2>quizQuestions</h2>
        </div>
     );
}
 
export default Quiz;