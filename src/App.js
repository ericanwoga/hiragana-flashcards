import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './pages/Start';
import Setup from './pages/Setup';

import './styles/App.css';

function App() {

  return (
    <Router>
      <div className="App"> 
        <div className="content">
          <Routes> {/*All page routes will show inside the content section*/}
            <Route exact path="/" element={<Start />} /> {/*Home page is called Start*/}
            <Route exact path="/setup" element={<Setup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; //exporting the 'App' component so we can use it elsewhere
