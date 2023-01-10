import {useState} from 'react'
import {GameContext} from './utils/Contexts';
import StartMenu from './pages/StartMenu'
import Setup from './pages/Setup'
import Quiz from './pages/Quiz'
import Score from './pages/Score'
import './styles/App.css';

function App() {
  const [page, setPage] = useState("start-page"); /*Controls which page we are seeing*/
  const [numOfQuestions, setNumOfQuestions] = useState(0);
  const [questionList, setQuestionList] = useState([]);
  const [userAnswerList, setUserAnswerList] = useState([]);

  return (
      <div className="App"> 
        <GameContext.Provider value={
          {page, setPage, questionList, setQuestionList, 
          numOfQuestions, setNumOfQuestions, userAnswerList, setUserAnswerList
          }}> {/*Gives child components access to parent states*/}
          
          
          {(page === "start-page") && <StartMenu />}
          {(page === "setup-page") && <Setup />}
          {(page === "quiz-page") && <Quiz />}
          {(page === "score-page") && <Score />}
        </GameContext.Provider>
      </div>
  );
}

export default App; //exporting the 'App' component so we can use it elsewhere
