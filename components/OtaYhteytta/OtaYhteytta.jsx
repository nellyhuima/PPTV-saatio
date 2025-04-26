import React, { useState } from 'react';
import './OtaYhteytta.css';

const OtaYhteytta = () => {
  //data handling
    const [formData, setFormData] = useState({
          name: '',
          email: '',
          message: '',
        });

         const [submitted, setSubmitted] = useState(false);

        //saving data
      const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
          });
        };

        const handleSubmit = (e) => {
          e.preventDefault();
          console.log("Submitted data:", formData);

           // Reset the form
        setFormData({
         name: '',
         email: '',
         message: '',
        });
        setSubmitted(true);

        //time that the message is shown
      setTimeout(() => setSubmitted(false), 4000);

        }
  return (
    <div className="view-content">
    <form className='YhteysLomake' onSubmit={handleSubmit}>
    <h1 className='Hteksti'>Ota yhteyttä</h1>
    <p className='YhteysText'>Mikäli sinulla on kysyttävää, voit tällä lomakkeella lähettää viestin meille. Vastaamme sinulle pikimmiten!</p>
        <label className='YhteysLabel'>
          <input
            type="text"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            placeholder='Nimi'
            required
          />
        </label>
        <label className='YhteysLabel'>
          <input
            type="email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            placeholder='Sähköposti'
            required
          />
        </label>
        <label className='YhteysLabel'>
          <textarea
            name="message"
            value={formData.message || ''}
            onChange={handleChange}
            placeholder='Viesti'
            required
          />
        </label>
        
        <button className='Obutton' type="submit">Lähetä</button>
        </form>
        </div>
  );
};

export default OtaYhteytta;