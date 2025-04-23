import React, { useState } from 'react';
import './UKK.css';

const UKK = () => {
  // tracks which question is open
  const [openIndex, setOpenIndex] = useState(null);

  // toggle function
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="ukkpohja">
      <h1>UKK</h1>
      <section className="faq">
        {[1, 2].map((item, index) => (
          <div className="faq-item" key={index}>
            <h3 onClick={() => toggleAnswer(index)}>Kysymys</h3>
            {openIndex === index && <p className="answer">Vastaus</p>}
          </div>
        ))}
      </section>
    </div>
  );
};

export default UKK;