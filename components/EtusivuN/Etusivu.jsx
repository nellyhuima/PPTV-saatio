import React from 'react';
import './Etusivu.css';

const Etusivu = () => {
  return (
    <div className="etusivu">
      <img src="/components/img/finalwhitelogo.png" alt='logo' height='350px' width='600px'/>
      <p className='etusivuQuote'>
        "Opiskelijoiden tukena jo vuodesta 1993"
      </p>
    </div>
  );
};

export default Etusivu;
