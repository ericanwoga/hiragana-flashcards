import { useState } from 'react';
import SetupTitle from '../components/SetupTitle';
import SetupBox from '../components/SetupBox';
import '../styles/Setup.css';

const Setup = () => {    

    return ( 
        <div className="Setup">
            <div id="setup-form-content">
                <SetupTitle />
                <SetupBox />
            </div>
        </div>
     );
}
 
export default Setup;