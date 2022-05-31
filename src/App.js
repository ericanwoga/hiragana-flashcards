import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Start from './pages/Start';
import Setup from './pages/Setup';
import Quiz from './pages/Quiz';

import './styles/App.css';

function App() {
  const [userQuestionAmount, setUserQuestionAmount] = useState(1); /*Sets the user's desired question amount*/

  return (
    <Router>
      <div className="App"> 
        <div className="content">
          <Routes> {/*All page routes will show inside the content section*/}
            <Route exact path="/" element={<Start />} /> {/*Home page is called Start*/}
            <Route exact path="/setup" element={<Setup setUserQuestionAmount={userQuestionAmount => setUserQuestionAmount(userQuestionAmount)}/>} />
            <Route exact path="/quiz" element={<Quiz questionAmount={userQuestionAmount}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; //exporting the 'App' component so we can use it elsewhere
