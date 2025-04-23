import React from 'react';
import './Historia.css'

const Historia = () => {
  return (
    <div className='Historia'>
      <div className='historiaContent'>
        <h1>Säätiöstä</h1>
          <div className='osiot'>
            <div className='yleisesti'>
              <h2>Yleisesti</h2>
              <p>
                Pohjois- Pohjanmaan Toimihenkilö- ja Virkamiesjärjestöjen Säätiö (PPTV) on TVK:n 
                Pohjois-Pohjanmaan Aluejärjestö ry:n 11.10.1994 perustama puoluepoliittisesti 
                sitoutumaton Säätiö. Säätiön hallituksen jäseniksi kutsutaan perustajajärjestöjen 
                Toimihenkilö- ja virkamiesjärjestöistä. Hallitukseen kuuluvat 20.10.2011 alkaen 
                puheenjohtaja, varapuheenjohtaja ja 10 jäsentä.
              </p>
            </div>
            <div className='miksi'>
              <h2>Miksi?</h2>
              <p>
                Säätiön tarkoituksena on edistää Pohjois-Pohjanmaan alueella ammatillista järjestäytymistä ja 
                kiinnostusta ammattiyhdistystoimintaan opiskelujen aikana. Säätiö toteuttaa säädekirjan mukaista
                tarkoitustaan mm jakamalla stipendejä järjestöllisesti aktiivisille oppilaskunnan jäsenille, vertaistukiohjaajan
                ja tuutortyöstä suositusten mukaan.
              </p>
            </div>
            <div className='kohteet'>
              <h2>Kohteet:</h2>
              <div>
                <ul>
                  <li>Oulun Ammattikorkeakoulu OAMK</li>
                  <li>Oulun seudun ammattiopisto OSAO</li>
                  <li>Ammattiopisto Luovi</li>
                  <li>Jokilaaksojen seudun ammattiopisto JEDU</li>
                  <li>Suomen diakoniaopisto SDO Oulu</li>
                  <li>Raahen porvari- ja kauppakoulu RPKK</li>
                  <li>PSK-aikuisopisto Oulu</li>
                  <li>Oulun PAlvelualanopisto OPAO</li>
                  <li>Poliisiammattikorkeakoulu POLAMK Tampere</li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Historia;