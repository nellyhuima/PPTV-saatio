import { useEffect, useState } from 'react';
import Etusivu from '../components/EtusivuN/Etusivu';
import Yleista from '../components/YleistaN/Yleista';
import Hakemus from '../components/HakemusI/Hakemus';
import UKK from '../components/UKKI/UKK';
import OtaYhteytta from '../components/OtaYhteytta/OtaYhteytta';
import Footer from '../components/FooterN/Footer';
import CookieAlert from '../components/CookieAlert/CookieAlert';

const sections = ['Etusivu', 'Yleista', 'Hakemus', 'UKK', 'OtaYhteytta'];

const Home = () => {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  // Seuraa scrollia ja aseta aktiivinen osio
  useEffect(() => {
    const handleScroll = () => {
      const scrollMiddle = window.scrollY + window.innerHeight / 2;
      let current = sections[0];

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollMiddle >= top && scrollMiddle < bottom) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // heti alussa
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <CookieAlert />

      <div className="navbar">
        <nav>
          {/* Hamburger-painike mobiilissa */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>

          {/* Linkit */}
          <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`nav-link ${activeSection === id ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {id === "OtaYhteytta"
                    ? "Ota yhteyttä"
                    : id === "Yleista"
                    ? "Yleistä"
                    : id}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Sivun osiot */}
      <div id="Etusivu"><Etusivu /></div>
      <div id="Yleista"><Yleista /></div>
      <div id="Hakemus"><Hakemus /></div>
      <div id="UKK"><UKK /></div>
      <div id="OtaYhteytta"><OtaYhteytta /></div>
      <div id="Footer"><Footer /></div>
    </>
  );
};

export default Home;