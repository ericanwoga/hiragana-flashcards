import React, {useContext} from 'react';
import {StartContext} from '../Contexts/StartContext';
import art from '../img/title-art.png';
import '../styles/Start.css';

function Start() {
    const {setPage} = useContext(StartContext); /*So we can use setPage in this child component*/

    return ( 
        <div className="Start">
            <div className="entire-title">
                <h1>ようこそ !</h1>
                <h2>practice hiragana</h2>
                
                <button className="start-button"
                onClick={() => {setPage("setup-page")}}>start</button>
            </div>
            <div className="start-art">
                <img src={art} alt=""/>
            </div>
        </div>
     );
}
 
export default Start;