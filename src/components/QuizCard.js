import { useState, useEffect } from 'react';
import '../styles/Quiz.css';

function QuizCard({quizQuestions}) {
    let blah = "Clown";

    function funcX () {
        document.getElementById("texttt").innerHTML = "bye" ;
    }



    return ( 
        <div className='quiz-card-box'>
            <h1 id="texttt">Hello</h1>
        </div>
     );
}

export default QuizCard;