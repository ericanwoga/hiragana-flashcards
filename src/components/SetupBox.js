import React, { useState, useContext } from 'react';
import {StartContext} from '../Contexts/StartContext';
import '../styles/Setup.css';

function SetupBox() {
    const {setPage, data, setData} = useContext(StartContext); /*So we can use setPage in this child component*/
    const [amount, setAmount] = useState(""); /*The user inputs amount of questions*/
    
    const handleSubmit = (event) => {
        event.preventDefault(); /*stops the erasure of input*/
        setData({...data, totalQuestions: amount}); /*Only changes the total question amount*/
        setPage("quiz-page");
    }

    return ( 
        <form className="setup-two-boxes" onSubmit={handleSubmit}>
            <div className="setup-question-amount-box">
                <label htmlFor ="question-amount"></label>

                <div id="setup-form-input">
                    <input 
                        type="number" id="question-amount" name="question-amount" 
                        placeholder="##" contentEditable = "true" pattern="^[0-9]+$"
                        required
                        min="1" max="20" 
                        value = {amount}
                        onChange = {(e) => setAmount(e.target.value)} //puts it into setAmount 
                    />
                </div>
                <h3 id="setup-slash">/</h3>
                <h3 id="out-of-num">30</h3>
            </div>
            <button id="setup-button-text">done</button> {/*submit button*/}
        </form>
     );
}
 
export default SetupBox;