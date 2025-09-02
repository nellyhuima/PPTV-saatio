import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const OtaYhteytta = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
      "service_gcbeg44",
      "template_ojkkszq", 
      form.current, 
      "MU7GSqKNFAaG76JpS"
      )

      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='YhteysLomake'>
      <div className='Ohjeet'>
        <h1 className='Hteksti'>Ota yhteyttä</h1>
        <p className='YhteysText'>
          Mikäli sinulla on kysyttävää, 
          voit tällä lomakkeella lähettää meille viestin.
          Vastaamme sinulle pikimmiten!
        </p>
      </div>
      <div className='Oform'>
        <form ref={form} onSubmit={sendEmail}>
          <label className='YhteysLabel'></label>
          <input className='Oinput' placeholder='Nimi' type="text" name="user_name" />
          <label className='YhteysLabel'></label>
          <input className='Oinput'placeholder='Sähköposti' type="email" name="user_email" />
          <label className='YhteysLabel'></label>
          <textarea className='Otextarea' placeholder='Viesti' name="message" />
          <input className='Obutton' type="submit" value="Lähetä" />
        </form>
      </div>
    </div>
  );
};

export default OtaYhteytta;