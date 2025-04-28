import React, { useState } from 'react';
import './UKK.css';

const UKK = () => {
  // tracks which question is open
  const [openIndex, setOpenIndex] = useState(null);

  // toggle function
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    { question: "Kuka voi hakea stipendiä?", answer: "Seuraavien koulujen opsikelijat voivat hakea; " },
    { question: "Milloin stipendi hakemukset käsitellään?", answer: "Hakemukset käsitellään toukokuussa ja joulukuussa, juuri ennen valmistumistasi" },
    { question: "Millä stipendin voi ansaita?", answer: "Ansiot ne ja nuo ja ne ja nuo" },
    { question: "Kuka olisi hyvä suosittelija?", answer: "suosittelija sieltä ja tuolta voi olla tämä ja tuo" },
    { question: "Mitä stipendi sisältää?", answer: "Rahasumma määräytyy hakijoiden määrän tai hallituksen päätöksen mukaisesti" },
  ];

  return (
<div className="ukkpohja">
  <div className="ukkcontent">
    <h1 className='Hteksti'>Usein kysytyt kysymykset</h1>
    <section className="faq">
      {faqData.map((item, index) => (
        <div className="question" key={index}>
          <div className="question-opener" onClick={() => toggleAnswer(index)}>
            <p>{item.question}</p>
            <span className="icon">{openIndex === index ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>}</span>
          </div>
          {openIndex === index && <p className="answer">{item.answer}</p>}
        </div>
      ))}
    </section>
  </div>
</div>
  );
};

export default UKK;