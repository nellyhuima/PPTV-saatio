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
    { question: "Kysmys 1", answer: "vastaus1." },
    { question: "kysmys2", answer: "vastaus2." },
    { question: "kysmys3", answer: "vastaus3" },
  ];

  return (
    <div className="ukkpohja">
      <div className="ukkcontent">
      <h1>UKK</h1>
      <section className="faq">
      {faqData.map((item, index) => (
          <div className="question" key={index}>
            <h3 onClick={() => toggleAnswer(index)}>{item.question}</h3>
            {openIndex === index && <p className="answer">{item.answer}</p>}
          </div>
        ))}
      </section>
      </div>
    </div>
  );
};

export default UKK;