import Start from './pages/Start';
import './styles/App.css';
import hira from './data/data.json';

function App() {

  let name = hira.hiraganaDictionary[3].hiragana;

  return (
    <div className="App"> 
      <div className="content">
        <Start x={name} /> {/*We import our various components here*/}
      </div>
    </div>
  );
}

export default App; //exporting the 'App' component so we can use it elsewhere
