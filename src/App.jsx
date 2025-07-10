import Layout from './Layout'
import Dashboard from './components/Dashboard'
import Trainingclasses from './components/Trainingclasses'
import Elearning from './components/Elearning'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
function App() {

  return (
    <Router>
    <Routes>
      {/* Layout is the shell, all pages go inside it */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="Trainingclasses" element={<Trainingclasses />} />
        <Route path="Elearning" element={<Elearning />} />
      </Route>
    </Routes>
  </Router>
  )
}

export default App
