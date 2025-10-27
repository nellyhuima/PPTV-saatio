import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const OtaYhteytta = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7xjjfuo", 
        "template_82tc8ae", 
        form.current, 
        "Hho6IVsVx_IjbG2RK"
      )

      .then(
        () => {
          console.log('SUCCESS!');
          alert("Viesti lähetetty.");
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Viestiäsi ei voitu lähettää. Yritä myöhemmin uudelleen.")
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