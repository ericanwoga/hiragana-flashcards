import SetupBox from '../components/SetupBox';
import '../styles/Setup.css';

function Setup(){    

    return ( 
        <div className="Setup">
            <div id="setup-form-content">
                <div className="setup-title-box">
                <h1 id="setup-title">...</h1>
                <h2 id="setup-subtitle">how many questions?</h2>
                </div>
                <SetupBox />
            </div>
        </div>
     );
}
 
export default Setup;