import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import QuizInstruction from "./components/Quiz/QuizInstruction";
import Play from "./components/Quiz/Play";
import QuizSummary from "./components/Quiz/QuizSummary";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play/instructions" exact element={<QuizInstruction />} />
        <Route path="/play/quiz" exact element={<Play />} />
        <Route path="/play/quizsummary" exact element={<QuizSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
