import React from "react";
import './Historia.css'

const Historia = () => {
  return (
    <div className='Historia'>
      <div className='historiaContent'>
        <h1 className="saatiosta">Säätiöstä</h1>
          <div className='osiot'>
            <div className='yleisesti'>
              <h2 className="historiaHeader">Yleisesti</h2>
              <p className="yleisestiTeksti">
                Pohjois- Pohjanmaan Toimihenkilö- ja Virkamiesjärjestöjen Säätiö (PPTV) on TVK:n 
                Pohjois-Pohjanmaan Aluejärjestö ry:n 11.10.1994 perustama puoluepoliittisesti 
                sitoutumaton Säätiö. Säätiön hallituksen jäseniksi kutsutaan perustajajärjestöjen 
                Toimihenkilö- ja virkamiesjärjestöistä. Hallitukseen kuuluvat 20.10.2011 alkaen 
                puheenjohtaja, varapuheenjohtaja ja 10 jäsentä.
              </p>
            </div>
            <div className='miksi'>
              <h2 className="historiaHeader">Miksi?</h2>
              <p className="miksiTeksti">
                Säätiön tarkoituksena on edistää Pohjois-Pohjanmaan alueella ammatillista järjestäytymistä ja 
                kiinnostusta ammattiyhdistystoimintaan opiskelujen aikana. Säätiö toteuttaa säädekirjan mukaista
                tarkoitustaan mm jakamalla stipendejä järjestöllisesti aktiivisille oppilaskunnan jäsenille, vertaistukiohjaajan
                ja tuutortyöstä suositusten mukaan.
              </p>
            </div>
            <div className='kohteet'>
              <h2 className="historiaHeader">Kohteet</h2>
              <div>
                <p className="kohteetNimet">Oulun Ammattikorkeakoulu OAMK</p>
                <p className="kohteetNimet">Oulun seudun ammattiopisto OSAO</p>
                <p className="kohteetNimet">Ammattiopisto Luovi</p>
                <p className="kohteetNimet">Jokilaaksojen seudun ammattiopisto JEDU</p>
                <p className="kohteetNimet">Suomen diakoniaopisto SDO Oulu</p>
                <p className="kohteetNimet">Raahen porvari- ja kauppakoulu RPKK</p>
                <p className="kohteetNimet">PSK-aikuisopisto Oulu</p>
                <p className="kohteetNimet">Oulun PAlvelualanopisto OPAO</p>
                <p className="kohteetNimet">Poliisiammattikorkeakoulu POLAMK Tampere</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Historia;