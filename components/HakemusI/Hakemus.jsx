import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Hakemus = () => {
  const navigate = useNavigate();

     // tracks which question is open
     const [openIndex, setOpenIndex] = useState(null);
  
     // toggle function
     const toggleAnswer = (index) => {
       setOpenIndex(openIndex === index ? null : index);
     };
 
     const faqData = [
       { question: "Kohteet", 
        answer: `Oulun Ammattikorkeakoulu OAMK
Oulun seudun ammattiopisto OSAO
Ammattiopisto Luovi
Jokilaaksojen seudun ammattiopisto JEDU
Suomen diakoniaopisto SDO Oulu
Raahen porvari- ja kauppakoulu RPKK
PSK-aikuisopisto Oulu
Oulun Palvelualanopisto OPAO
Poliisiammattikorkeakoulu POLAMK Tampere` },
       { question: "Ohje hakijalle", answer: 'Hakija voi olla ammattiopistossa tai ammattikorkeakoulussa tutkintoa suorittava henkilö (tuutori, oppilaskunnan jäsen, järjestöaktiivi opiskeluaikana) mainituista oppilaitoksista. Hakemukseen on liitettävä suosittelija esim. opinto-ohjaaja, oppilaskunnan puheenjohtaja/varapuheenjohtaja. Muista täyttää hakemus huolellisesti ja tarkista että, hakemuksessa on oikeat yhteystietosi ja tilinumerosi. Tarkista oppilaitoksesi kohteista kuulutko kohderyhmään.'},
       { question: "Ohje suosittelijalle", answer: 'Kirjoita stipendin hakijasta perustellut näkemyksesi minkä vuoksi hänelle tulisi myöntää stipendi. Hyväksymisessä korostuu samat kriteerit kuin "ohje hakijalle" kohdassa.'},
      ];
   
  return (
    <div className="lomake">
      <div className='lomakeContent'>
        <h1 className="Htext">Hakemus</h1>
        <p className="text">
          Kriteerit täyttävälle hakijalle myönnetään säätiön stipendi tutkinnon suorittamisvuotena.
          Katso tarkempi ohje hakijalle ja suosittelijalle kohdista.
          Painamalla alla olevaa nappia pääset täyttämään hakemuksen SignHero sivuilla.
        </p>
        
        <div className="buttonContainer">
        <button className="lomakebutton" onClick={() => navigate('/Lomake')}>Hakijalle</button>
        <button className="lomakebutton" onClick={() => navigate('/Lomake')}>Suosittelijalle</button>
        </div>

      </div>
      <section className="Hfaq">
      {faqData.map((item, index) => (
        <div className="Hquestion" key={index}>
          <div className="Hquestion-opener" onClick={() => toggleAnswer(index)}>
            <p>{item.question}</p>
            <span className="Hicon">{openIndex === index ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>}</span>
          </div>
          {openIndex === index && <p className="Hanswer">
              {item.answer.split("\n").map((line, i) => (
                  <div key={i} style={{ marginBottom: "6px" }}>{line}</div>
               ))}
           </p>}
        </div>
      ))}
    </section>
    </div>
  );
};

export default Hakemus;