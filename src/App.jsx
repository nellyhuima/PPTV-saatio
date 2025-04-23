import React from 'react';
import Etusivu from '../components/EtusivuN/Etusivu';
import Lomake from '../components/HakemusI/Hakemus'
import Historia from '../components/HistoriaN/Historia';
import OtaYhteytta from '../components/OtaYhteytta/OtaYhteytta';
import UKK from '../components/UKKI/UKK';


const App = () => {
    return (
      <>
        {/* Navigation Bar */}
        <div className="navbar">
          <nav>
            <ul>
              <li><a href="#Etusivu">Etusivu</a></li>
              <li><a href="#Historia">Historia</a></li>
              <li><a href="#Lomake">Lomake</a></li>
              <li><a href="#UKK">UKK</a></li>
              <li><a href="#OtaYhteytta">Ota yhteyttä</a></li>
            </ul>
          </nav>
        </div>
  
        {/* Sections with IDs for anchor links */}
        <div id="Etusivu">
          <Etusivu />
        </div>
  
        <div id="Historia">
          <Historia />
        </div>
  
        <div id="Lomake">
          <Lomake />
        </div>
  
        <div id="UKK">
          <UKK />
        </div>
  
        <div id="OtaYhteytta">
          <OtaYhteytta />
        </div>
  
        <div id="Footer">
          <p>footer</p>
        </div>
      </>
    );
  };
  

 export default App;
