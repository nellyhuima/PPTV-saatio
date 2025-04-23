import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Lomake from '../components/Lomake/Lomake.jsx'; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Lomake" element={<Lomake />} />
    </Routes>
  );
};

export default App;
