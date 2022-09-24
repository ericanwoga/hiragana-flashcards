import {useState} from 'react'
import Start from './pages/Start';
import Setup from './pages/Setup'
import Quiz from './pages/Quiz'
import {StartContext} from './Contexts/StartContext';
import './styles/App.css';

function App() {
  const [page, setPage] = useState("start-page"); /*Controls which page we are seeing*/
  const [data, setData] = useState({
    totalQuestions: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  }); /*Controls the quiz data*/


  /*The function display will show the correct component based on the page*/
  function display() {
    if(page == "start-page"){
      /*Gives the start button the ability to setPage() to setup*/
      return <StartContext.Provider value={{page, setPage}}><Start /></StartContext.Provider>
    }else if (page == "setup-page"){
      return <Setup/>
    }else{
      return <Quiz />
    }
  }

  return (
      <div className="App"> 
        {display()} {/*Call display*/}
      </div>
  );
}

export default App; //exporting the 'App' component so we can use it elsewhere
