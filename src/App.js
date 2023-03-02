import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.js';
import StartQuiz from './pages/StartQuiz.js';
import Quiz from './pages/Quiz.js';
import Result from './pages/Result.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StartQuiz" element={<StartQuiz />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
