import SetupTitle from '../components/SetupTitle';
import SetupBox from '../components/SetupBox';
import SetupButton from '../components/SetupButton';
import '../styles/Setup.css';

const Setup = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("meow meow ");
    }

    return ( 
        <div className="Setup">
            <form id="setup-form-box" onSubmit={handleSubmit}>
                <SetupTitle />
                <SetupBox />
                <SetupButton />
            </form>
        </div>
     );
}
 
export default Setup;