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

  useEffect(() => {
    const updateActiveSectionAndUnderline = () => {
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

      // Päivitä liukuvan viivan sijainti suhteessa nav-links
      const underline = document.querySelector(".active-underline");
      const activeLink = document.querySelector(`.nav-link[href="#${current}"]`);
      if (underline && activeLink) {
        const rect = activeLink.getBoundingClientRect();
        const navRect = activeLink.closest(".nav-links").getBoundingClientRect();
        underline.style.width = `${rect.width}px`;
        underline.style.transform = `translateX(${rect.left - navRect.left}px)`;
      }
    };

    window.addEventListener("scroll", updateActiveSectionAndUnderline);
    window.addEventListener("resize", updateActiveSectionAndUnderline);

    updateActiveSectionAndUnderline(); // heti alussa

    return () => {
      window.removeEventListener("scroll", updateActiveSectionAndUnderline);
      window.removeEventListener("resize", updateActiveSectionAndUnderline);
    };
  }, []);

  const handleClick = (id) => {
    setActiveSection(id);
    const underline = document.querySelector(".active-underline");
    const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
    if (underline && activeLink) {
      const rect = activeLink.getBoundingClientRect();
      const navRect = activeLink.closest(".nav-links").getBoundingClientRect();
      underline.style.width = `${rect.width}px`;
      underline.style.transform = `translateX(${rect.left - navRect.left}px)`;
    }
  };

  return (
    <>
      <CookieAlert />
      <div className="navbar">
        <nav>
          <ul className="nav-links">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`nav-link ${activeSection === id ? "active" : ""}`}
                  onClick={() => handleClick(id)}
                >
                  {id === "OtaYhteytta"
                    ? "Ota yhteyttä"
                    : id === "Yleista"
                    ? "Yleistä"
                    : id}
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
