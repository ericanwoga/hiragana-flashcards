import {useState} from 'react';
import '../styles/Setup.css';
import SetupButton from './SetupButton';

const SetupBox = () => {
    const [questionAmount, setQuestionAmount] = useState("");

    return ( 
        <div className="setup-lesson-amount-box">
                <label htmlFor ="lesson-amount"></label>
                <input 
                /*If input is typed, update the questionAmount and the value property*/
                    type="text" 
                    id="lesson-amount" 
                    name="lesson-amount" 
                    placeholder="##" 
                    contentEditable="true"
                    pattern="[0-9]+"
                    maxLength = "3"
                    required
                    value = {questionAmount}
                    onChange = {(e) => setQuestionAmount(e.target.value)}
                />
                <h3 id="setup-slash"> / </h3>
                <h3 id="out-of-104">104</h3>
        </div>
     );
}
 
export default SetupBox;