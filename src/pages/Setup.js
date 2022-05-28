import '../styles/Setup.css';

const Setup = () => {
    return ( 
        <div>
            <div className="setup-title-box">
                <h1 id="setup-title">...</h1>
                <h2 id="setup-subtitle">how many characters?</h2>
            </div>
            
            <div className="setup-lesson-amount-box">
                    <label for ="lesson-amount"></label>
                    <input type="text" id="lesson-amount" name="lesson-amount" placeholder="##" contenteditable="true" />
                    <h3 id="setup-slash"> / </h3>
                    <h3 id="out-of-104">104</h3>
            </div>
        </div>
     );
}
 
export default Setup;