import StartTitle from './StartTitle';
//import StartButton from './StartButton';
import StartImg from './StartImg';
import './styles/App.css';

function App() {

  return (
    <div className="App"> 
    <div className="content">
      <StartTitle /> {/*We import our components here*/}
      <StartImg />
    </div>
    </div>
  );
}

export default App; //exporting the 'App' component so we can use it elsewhere
