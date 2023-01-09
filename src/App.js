import {useState} from 'react'
import {StartMenuContext} from './utils/Contexts';
import StartMenu from './pages/StartMenu'
import Setup from './pages/Setup'
import Quiz from './pages/Quiz'
import './styles/App.css';

function App() {
  const [page, setPage] = useState(() => "start-page"); /*Controls which page we are seeing*/
  const [numOfQuestions, setNumOfQuestions] = useState(() => 0);
  const [questionList, setQuestionList] = useState(() => []);

  /*The function display will show the correct component based on the page*/
  function displayPage() {
    switch (page){
      case "start-page":
        return <StartMenu />;
      case "setup-page": 
        return <Setup />;
      case "quiz-page":
        return <Quiz />;
      default :
        return <StartMenu />;
    }
  }

  return (
      <div className="App"> 
        <StartMenuContext.Provider value={{page, setPage, questionList, setQuestionList, numOfQuestions, setNumOfQuestions}}> {/*Gives child components access to parent states*/}
          {displayPage()} {/*Call displayPage*/}
        </StartMenuContext.Provider>
      </div>
  );
}

export default App; //exporting the 'App' component so we can use it elsewhere
