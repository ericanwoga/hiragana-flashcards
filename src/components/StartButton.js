import {useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/Start.css'

const StartButton = () => {
    const startButtonClicked = () => {
        /*console.log("Hello!!");*/
    }

    return ( 
        <div className="start-button" onClick={startButtonClicked}>
            <Link to="/setup" id="start-button-text">start</Link>
        </div> 
    );
}
 
export default StartButton;