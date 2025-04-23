import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Lomake from '../components/Lomake/Lomake'; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lomake" element={<Lomake />} />
    </Routes>
  );
};



export default App;
