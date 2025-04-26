import Etusivu from '../components/EtusivuN/Etusivu';
import Historia from '../components/HistoriaN/Historia';
import Hakemus from '../components/HakemusI/Hakemus';
import UKK from '../components/UKKI/UKK';
import OtaYhteytta from '../components/OtaYhteytta/OtaYhteytta';
import Footer from '../components/FooterN/Footer'

const Home = () => {
  return (
    <>
      <div className="navbar">
        <nav>
          <ul>
            <li><a href="#Etusivu">Etusivu</a></li>
            <li><a href="#Historia">Historia</a></li>
            <li><a href="#Hakemus">Hakemus</a></li>
            <li><a href="#UKK">UKK</a></li>
            <li><a href="#OtaYhteytta">Ota yhteyttä</a></li>
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