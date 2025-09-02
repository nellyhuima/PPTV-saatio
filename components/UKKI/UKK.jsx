import React, { useState } from 'react';


const UKK = () => {
  // tracks which question is open
  const [openIndex, setOpenIndex] = useState(null);

  // toggle function
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    { question: "Kuka voi hakea stipendiä?", answer: "Jos olet valmistuva opiskelija sekä sinulla on suosittelija. Seuraavien koulujen opiskelijat voivat hakea; " },
    { question: "Milloin stipendi hakemukset käsitellään?", answer: "Hakemukset käsitellään toukokuussa ja joulukuussa, juuri ennen valmistumistasi" },
    { question: "Millä stipendin voi ansaita?", answer: "Näillä asioilla voit ansaita stipendin: " },
    { question: "Kuka olisi hyvä suosittelija?", answer: "Suosittelija voi olla mm." },
    { question: "Mitä stipendi sisältää?", answer: "Rahasumma määräytyy hakijoiden määrän tai hallituksen päätöksen mukaisesti" },
  ];

  return (
<div className="ukkpohja">
  <div className="ukkcontent">
    <h1 className='Htekst'>Usein kysytyt kysymykset</h1>
    <section className="faq">
      {faqData.map((item, index) => (
        <div className="question" key={index}>
          <div className="question-opener" onClick={() => toggleAnswer(index)}>
            <p>{item.question}</p>
            <span className="Uicon">{openIndex === index ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>}</span>
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