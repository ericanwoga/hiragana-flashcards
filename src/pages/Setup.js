import generateQuiz from '../utils/Utils';
import { useContext } from 'react';
import {GameContext} from '../utils/Contexts';
import '../styles/Setup.css';

function Setup(){  
    const {setPage, setQuestionList, setNumOfQuestions} = useContext(GameContext);

    function handleSelection(e) {
        let userInput = Number(e.target.value);
        setNumOfQuestions(userInput); //Set number of questions in quiz

        let list = generateQuiz(userInput); //Get list of questions
        setQuestionList(list); //Set list of questions

        setPage("quiz-page"); //change the page 
    }

    return ( 
        <div className="Setup">
            <div id="setup-content">
                <div className="setup-title-box">
                    <h1 id="setup-title">...</h1>
                    <h2 id="setup-subtitle">how many questions?</h2>
                </div>
                <div className='setup-question-amount-box'>
                    <button className='number-of-questions' onClick={handleSelection} value="5">5</button>
                    <button className='number-of-questions' onClick={handleSelection} value="10">10</button>
                    <button className='number-of-questions' onClick={handleSelection} value="15">15</button>
                    <button className='number-of-questions'onClick={handleSelection} value="20">20</button>
                </div>
            </div>           
        </div>
     );
}
 
export default Setup;