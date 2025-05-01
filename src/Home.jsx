import { useEffect, useState } from 'react';
import Etusivu from '../components/EtusivuN/Etusivu';
import Historia from '../components/HistoriaN/Historia';
import Hakemus from '../components/HakemusI/Hakemus';
import UKK from '../components/UKKI/UKK';
import OtaYhteytta from '../components/OtaYhteytta/OtaYhteytta';
import Footer from '../components/FooterN/Footer'
import CookieAlert from '../components/CookieAlert/CookieAlert';

const sections = ['Etusivu', 'Historia', 'Hakemus', 'UKK', 'OtaYhteytta'];

const Home = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
          <CookieAlert />
      <div className="navbar">
        <nav>
        <ul>
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`nav-link ${activeSection === id ? 'active' : ''}`}
                >
                  {id === 'OtaYhteytta' ? 'Ota yhteyttä' : id}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div id="Etusivu"><Etusivu /></div>
      <div id="Historia"><Historia /></div>
      <div id="Hakemus"><Hakemus /></div>
      <div id="UKK"><UKK /></div>
      <div id="OtaYhteytta"><OtaYhteytta /></div>
      <div id="Footer"><Footer /></div>
    
    </>
    
  );
};

export default Home;