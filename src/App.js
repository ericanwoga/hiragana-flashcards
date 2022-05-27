import Start from './Start';
import './styles/App.css'

function App() {

  return (
    <div className="App"> 
      <div className="content">
        <Start /> {/*We import our various components here*/}
      </div>
    </div>
  );
}

export default App; //exporting the 'App' component so we can use it elsewhere
