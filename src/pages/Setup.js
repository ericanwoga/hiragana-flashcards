import { useState } from 'react';
import SetupTitle from '../components/SetupTitle';
import SetupBox from '../components/SetupBox';
import '../styles/Setup.css';

const Setup = ({setUserQuestionAmount}) => {    

    return ( 
        <div className="Setup">
            <div id="setup-form-content">
                <SetupTitle />
                <SetupBox setUserQuestionAmount={setUserQuestionAmount} />
            </div>
        </div>
     );
}
 
export default Setup;