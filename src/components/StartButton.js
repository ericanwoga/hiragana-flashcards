import '../styles/Start.css'

const StartButton = () => {
    const startButtonClicked = () => {
        console.log("Hello!!");
    }

    return ( 
        <div className="start-button" onClick={startButtonClicked}>
            <p>start</p>
        </div> 
    );
}
 
export default StartButton;