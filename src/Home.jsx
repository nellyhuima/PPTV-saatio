import { useEffect, useState } from "react";
import Etusivu from "../components/EtusivuN/Etusivu";
import Yleista from "../components/YleistaN/Yleista";
import Hakemus from "../components/HakemusI/Hakemus";
import UKK from "../components/UKKI/UKK";
import OtaYhteytta from "../components/OtaYhteytta/OtaYhteytta";
import Footer from "../components/FooterN/Footer";
import CookieAlert from "../components/CookieAlert/CookieAlert";

const sections = ["Etusivu", "Yleista", "Hakemus", "UKK", "OtaYhteytta"];

const Home = () => {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scrollin perusteella vaihtaa activeSection
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

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // heti alussa
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Päivittää liukuvan viivan sijainnin
  useEffect(() => {
    const underline = document.querySelector(".active-underline");

    const updateUnderline = () => {
      const activeLink = document.querySelector(".nav-link.active");
      if (activeLink && underline) {
        const linkRect = activeLink.getBoundingClientRect();
        const ulRect = activeLink.closest("ul").getBoundingClientRect();
        const offset = linkRect.left - ulRect.left;
        underline.style.width = `${linkRect.width}px`;
        underline.style.transform = `translateX(${offset}px)`;
      }
    };

    updateUnderline();
    window.addEventListener("scroll", updateUnderline);
    window.addEventListener("resize", updateUnderline);
    return () => {
      window.removeEventListener("scroll", updateUnderline);
      window.removeEventListener("resize", updateUnderline);
    };
  }, [activeSection]);

  return (
    <>
      <CookieAlert />
      <div className="navbar">
        <nav>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </button>

          <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`nav-link ${activeSection === id ? "active" : ""}`}
                  onClick={() => {
                    setMenuOpen(false); // sulkee mobiili-menun
                    setActiveSection(id); // päivittää viivan
                  }}
                >
                  {id === "OtaYhteytta" ? "Ota yhteyttä" : id === "Yleista" ? "Yleistä" : id}
                </a>
              </li>
            ))}
            <span className="active-underline"></span>
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
