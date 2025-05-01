import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Lomake from '../components/Lomake/Lomake'; 
import './assets/fonts/font.css';
import ScrollToTop from '../components/TopScroll/ScrollToTop';

const App = () => {

  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lomake" element={<Lomake />} />
    </Routes>
  </>
  );
};



export default App;
