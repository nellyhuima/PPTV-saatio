import React from "react";
import { useNavigate } from 'react-router-dom';
import './Hakemus.css'; 

const Hakemus = () => {
  const navigate = useNavigate();
  return (
    <div className="lomake">
      <div className='lomakeContent'>
        <h1>Hakemus</h1>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
        <button className="lomakebutton" onClick={() => navigate('/Lomake')}>Hae tästä!</button>
      </div>
    </div>
  );
};

export default Hakemus;