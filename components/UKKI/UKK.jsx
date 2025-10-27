import React, { useState } from 'react';


const UKK = () => {
  // tracks which question is open
  const [openIndex, setOpenIndex] = useState(null);

  // toggle function
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    { question: "Kuka voi hakea stipendiä?", answer: "Hakija voi olla Pohjois-Pohjanmaalla ammattiopistossa tai ammattikorkeakoulussa tutkintoa suorittava henkilö (tuutori, oppilaskunnan jäsen, järjestöaktiivi opiskeluaikana). Emme myönnä stipendejä YAMK tutkintoa suorittavalle." },
    { question: "Milloin stipendi hakemukset käsitellään?", answer: "Hakemukset käsitellään säätiön toukokuun ja joulukuun kokouksissa. Olemme yhteydessä stipendin hakijaan sähköpostitse. Tieto menee myös hakijan suosittelijalle ja oppilaitokselle." },
    { question: "Millä stipendin voi ansaita?", answer: "Hakija voi olla ammattiopistossa tai ammattikorkeakoulussa tutkintoa suorittava henkilö (tuutori, oppilaskunnan jäsen, järjestöaktiivi opiskeluaikana) mainituista oppilaitoksista. Hakemukseen on liitettävä suosittelija esim. opinto-ohjaaja, oppilaskunnan puheenjohtaja/varapuheenjohtaja." },
    { question: "Kuka olisi hyvä suosittelija?", answer: "Suosittelija voi olla esim. opinto-ohjaaja, oppilaskunnan puheenjohtaja/varapuheenjohtaja" },
    { question: "Mitä stipendi sisältää?", answer: "Rahasumma määräytyy hakijoiden määrän tai hallituksen päätöksen mukaisesti." },
    { question: "Miten voin olla säätiöön yhteydessä?", answer: "Ota yhteyttä kohdassa voit lähettää sähköpostia. " },
    { question: "Opiskelen poliisiammattikorkeakoulussa", answer: "Mikäli olet kriteerit täyttävä hakija Pohjois-Pohjanmaalta ja/tai suoritat opiskeluusi liittyvää harjoittelua Oulun poliisilaitoksen alueella, olet oikeutettu hakemaan stipendiä valmistumisvuonnasi." },
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