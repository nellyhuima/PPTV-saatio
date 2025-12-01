import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import './assets/fonts/font.css';
import ScrollToTop from '../components/TopScroll/ScrollToTop';

const App = () => {

  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </>
  );
};



export default App;
