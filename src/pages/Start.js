import StartTitle from '../components/StartTitle';
import StartImg from '../components/StartImg';
import '../styles/Start.css';

function Start(prop) {
    return ( 
        <div className="Start">
            <StartTitle />
            <h2>{prop.x}</h2>
            <StartImg />
        </div>
     );
}
 
export default Start;