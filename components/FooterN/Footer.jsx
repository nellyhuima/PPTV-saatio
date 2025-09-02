import React, { useEffect } from 'react';


const Footer = () => {

  useEffect(() => {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("TietosuojaselosteBtn");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
      modal.style.display = "block";
    };

    span.onclick = function() {
      modal.style.display = "none";
    };

    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }, []);

  return (
    <div className='FooterContent'>
      <img src="/components/img/finalwhitelogo.png" alt='logo' height='116.6px' width='200px'/>
      <button id="TietosuojaselosteBtn">Tietosuojaseloste</button>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h1>TIETOSUOJASELOSTE</h1>
          <p>Henkilötietolain (523/99) 10 §:n ja EU:n yleisen tietosuoja-asetuksen (GDPR) mukainen rekisteri- ja tietosuojaseloste.</p>
          <h2>1. REKISTERIN PITÄJÄ</h2>
          <p>Pohjois-Pohjanmaan Toimihenkilö- ja Virkamiesjärjestöjen Säätiö</p>
          <p>1567052-5</p>
          <p>Lahdenojantie 24</p>
          <p>90810 Kiviniemi</p>
          <p>+358 443745751</p>
          <br></br>
          <h2>2. YHTEYSHENKILÖ</h2>
          <p>Pasi Karppinen</p>
          <p>karppinen.pasi@gmail.com</p>
          <p>+358 443745751</p>
          <br></br>
          <h2>3. REKISTERIN NIMI</h2>
          <p>Stipendirekisteri</p>
          <br></br>
          <h2>4. HENKILÖTIETOJEN KÄSITTELYN PERUSTE JA TARKOITUS</h2>
          <p>Henkilötietoja kerätään stipendi hakemusten käsittelyyn sekä varojen jakamista varten. Kerättyjä tietoja käytetään rekisterinpitäjän sisäiseen raportointiin.</p>
          <p>Stipendien hakijoista kerätään seuraavia tietoja:
            -hakijaa koskevat tiedot (nimi, syntymäaika, yhteystiedot, tiedot opinnoista)
            -tietoja stipendin maksamista varten (henkilötunnus, tilinumero)
            säilytämme henkilötietojasi Rekisterissä myönteisiin päätöksiin johtaneiden 	stipendihakemusten osalta viisi vuotta
            Kielteisiin päätöksiin johtaneet hakemukset säilytetään Rekisterissä 1 vuotta hakemuksen käsittelystä.
          </p>
          <br></br>
          <h2>5. SÄÄNNÖNMUKAISET TIETOLÄHTEET</h2>
          <p>Säännönmukaisina tietolähteinä ovat stipendien hakijoiden antamat tiedot, jotka toimitetaan rekisterinpitäjälle stipendi hakulomakkeella. </p>
          <br></br>
          <h2>6. SÄÄNNÖNMUKAISET TIETOJEN LUOVUTUKSET</h2>
          <p>Stipendien saajien nimet ovat julkista tietoa.
	        Tietoja stipendin saamisesta ei toimiteta viranomaisille.
          </p>
          <h2>7. TIETOJEN SIIRTO EU:N TAI ETA:N ULKOPUOLELLE</h2>
          <p>Henkilötietoja ei siirretä EU:n tai Euroopan talousalueen ulkopuolelle.</p>
          <br></br>
          <h2>8. REKISTERIN SUOJAUKSEN PERIAATTEET</h2>
          <h3>Manuaalinen aineisto</h3>
          <p>Aineisto säilytetään lukitussa tilassa ja hävitetään, kun sitä ei enää tarvita. </p>
          <h3>Sähköinen aineisto</h3>
          <p>Rekisteri on asianmukaisesti suojattuna rekisterinpitäjän tiloissa. Henkilötietojen käsittelyyn on oikeus.</p>
          <p>Rekisterinpitäjä ilmoittaa mahdollisista tietoturvaloukkauksista suoraan viranomaisille tai käyttäjälle soveltuvan lainsäädännön mukaisesti.</p>
          <br></br>
          <h2>9. TARKASTUSOIKEUS JA OIKEUS VAATIA TIEDON KORJAAMISTA JA POISTAMISTA</h2>
          <p>Jokaisella on oikeus tarkastaa henkilötietorekisteriin talletetut tietonsa ja vaatia henkilörekisterissä olevan virheellisen tiedon korjaamista tai poistamista. Tarkastuspyyntö osoitetaan rekisterinpitäjän yhteyshenkilölle yllä olevilla yhteystiedoilla ja rekisteröidyn allekirjoituksella varustettuna kirjallisesti tai sähköisesti.</p>
          <br></br>
          <h2>10. MUUT HENKILÖTIETOJEN KÄSITTELYYN LIITTYVÄT OIKEUDET</h2>
          <p>Rekisteröidyillä on oikeus peruuttaa henkilötietojen käsittelyyn antamansa 	suostumus.</p>
          <p>Oulu 3.10.2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
