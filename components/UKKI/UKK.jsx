import React from 'react';
import './UKK.css';

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="faq-item">
        <h3 onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
          {question}
        </h3>
        {isOpen && <p className="answer">{answer}</p>}
      </div>
    );
  }
  
  function UKK() {
    const faqList = [
      { question: 'Mikä on palautuskäytäntö?', answer: 'Voit palauttaa tuotteen 30 päivän sisällä.' },
      { question: 'Toimitatteko ulkomaille?', answer: 'Kyllä, toimitamme kansainvälisesti.' },
    ];
  
    return (
      <div className="ukkpohja">
        <h1>UKK</h1>
        <section className="faq">
          {faqList.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </section>
      </div>
    );
  }
  export default UKK;