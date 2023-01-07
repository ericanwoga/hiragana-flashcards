import React, { useState, useEffect, useContext } from 'react';
import {StartMenuContext} from '../utils/Contexts';

import '../styles/Quiz.css';

function Quiz() {
    const {setPage} = useContext(StartMenuContext);
    

    return (
        <div className="Quiz">
            <div className='quiz-content'>

            </div>
        </div> 
     );
}
 
export default Quiz;