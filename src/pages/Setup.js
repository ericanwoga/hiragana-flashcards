import generateQuiz from '../utils/Utils';
import { useContext } from 'react';
import {StartMenuContext} from '../utils/Contexts';
import '../styles/Setup.css';

function Setup(){  
    const {setPage} = useContext(StartMenuContext);

    function handleSelection(e) {
        generateQuiz(e.target.value);
        setPage("quiz-page");
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