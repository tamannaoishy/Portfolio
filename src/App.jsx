import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetail from './pages/ProjectDetail';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
