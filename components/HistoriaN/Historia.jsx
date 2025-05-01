import React from "react";
import './Historia.css'

const Historia = () => {

  return (
    <div className="HistoriaContent">
      <h1 className="HeaderForHistoria">Tietoa säätiöstä</h1>
      <div className="HistoriaContainers">
        <div className="DivLeft">
          <div className="YleisestiDiv">
            <h2 className="Yleisesti">Perustaminen</h2>
            <p className="YleisestiTeksti">
              Pohjois- Pohjanmaan Toimihenkilö- ja Virkamiesjärjestöjen Säätiö (PPTV) on TVK:n 
              Pohjois-Pohjanmaan Aluejärjestö ry:n 11.10.1994 perustama puoluepoliittisesti 
              sitoutumaton Säätiö.
              
              Säätiön hallituksen jäseniksi kutsutaan perustajajärjestöjen 
              Toimihenkilö- ja virkamiesjärjestöistä. Hallitukseen kuuluvat 20.10.2011 alkaen 
              puheenjohtaja, varapuheenjohtaja ja 10 jäsentä.
            </p>
          </div>
         
        </div>
        <div className="DivRight">
        <div className="MiksiDiv">
            <h2 className="Miksi">Tarkoitus</h2>
            <p className="MiksiTeksti">
              Säätiön tarkoituksena on edistää Pohjois-Pohjanmaan alueella ammatillista järjestäytymistä ja 
              kiinnostusta ammattiyhdistystoimintaan opiskelujen aikana.  <br />
              
              <br />Säätiö toteuttaa säädekirjan mukaista
              tarkoitustaan mm jakamalla stipendejä järjestöllisesti aktiivisille oppilaskunnan jäsenille, vertaistukiohjaajan
              ja tuutortyöstä suositusten mukaan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historia;