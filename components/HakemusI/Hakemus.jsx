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
       { question: "Ohje hakijalle", answer: 'Tähän tulee ohje hakijalle hakemuksen täyttämiseen.'},
       { question: "Ohje suosittelijalle", answer: 'Tähän tulee ohje Suosittelijalle hakemuksen täyttämiseen.'},
      ];
   
  return (
    <div className="lomake">
      <div className='lomakeContent'>
        <h1 className="Htext">Hakemus</h1>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat,  
        </p>
        
        <button className="lomakebutton" onClick={() => navigate('/Lomake')}>Hae tästä!</button>
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