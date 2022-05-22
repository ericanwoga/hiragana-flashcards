import './App.css';
import StartTitle from './StartTitle';
import StartImg from './StartImg';
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
