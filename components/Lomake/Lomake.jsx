import { useState, useEffect } from 'react';
import './Lomake.css'

const Lomake = () => {
    //toggle handling
    const [OpiskelijaView, setOpiskelijaView] = useState(true);

    const toggleView = () => {
      setOpiskelijaView(!OpiskelijaView);
    };


    //data handling
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        hetu: '',
        osoite: '',
        postinro: '',
        puhnro: '',
        oppilaitos: '',
        yhdistys: '',
        tutkinto: '',
        aloitus: '',
        valmistuu: '',
        tilinumero: '',
        allekirjoitus: '',
        Sname: '',
        Semail: '',
        Sperustelu: '',
        Sallekirjoitus: '',
      });

      const [submitted, setSubmitted] = useState(false);

      //saving data
      const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
          });
        };
      // You could send data here via fetch or axios

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted data:", formData);

         // Reset the form
    setFormData({
        name: '',
        email: '',
        message: '',
        hetu: '',
        osoite: '',
        postinro: '',
        puhnro: '',
        oppilaitos: '',
        yhdistys: '',
        tutkinto: '',
        aloitus: '',
        valmistuu: '',
        tilinumero: '',
        allekirjoitus: '',
        Sname: '',
        Semail: '',
        Sperustelu: '',
        Sallekirjoitus: '',
      });
      setSubmitted(true);

      //time that the message is shown
      setTimeout(() => setSubmitted(false), 4000);
      };

  return (
    <div className='toggle-container'>

    <div className="toggle-wrapper">
    <span className="label">Stipendin hakija</span>
    <label className='switch'>
      <input
        type="checkbox"
        checked={!OpiskelijaView}
        onChange={toggleView} />
      <span className="slider round"></span>
    </label>
    <span className="label">Suosittelija</span>
    </div>

    <div className="view-content">
    {OpiskelijaView ? (
      <div className='view-content'>
        <h2>Hakemus</h2>
        <p className='kuvaus'>Tästä voit täyttää hakemuksen stipendille. Vaihdathan valikosta oletko stipendin hakija vai suosittelija!</p>
        <form onSubmit={handleSubmit}>
        <label>
          Nimi:
          <input
            type="text"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Henkilötunnus:
          <input
            type="text"
            name="hetu"
            value={formData.hetu || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
         Osoite:
          <input
            type="text"
            name="osoite"
            value={formData.osoite || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Postinumero/-paikka
          <input
            type="text"
            name="postinro"
            value={formData.postinro || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Puhelinnumero:
          <input
            type="text"
            name="puhnro"
            value={formData.puhnro || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Sähköposti:
          <input
            type="email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Oppilaitos:
          <input
            type="text"
            name="oppilaitos"
            value={formData.oppilaitos || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Oppilasjäsen jäsenyhdistys:
          <input
            type="text"
            name="yhdistys"
            value={formData.yhdistys || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Ammatti, johon valmistut / tutkinto:
          <input
            type="text"
            name="tutkinto"
            value={formData.tutkinto || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
         Ajankohta milloin aloitit opiskelut:
          <input
            type="text"
            name="aloitus"
            value={formData.aloitus || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Ajankohta milloin valmistut:
          <input
            type="text"
            name="valmistuu"
            value={formData.valmistuu || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Tilinumero stipendin toimittamiseen
          <input
            type="text"
            name="tilinumero"
            value={formData.tilinumero || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Omat perustelut hakemukselle
          <textarea
            name="message"
            value={formData.message || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Allekirjoitus
          <input
            type="text"
            name="allekirjoitus"
            value={formData.allekirjoitus || ''}
            onChange={handleChange}
            required
          />
        </label>
        <button className='Lbutton' type="submit">Lähetä</button>
        </form>
      </div>
    ) : (
      <div className='view-content'>
        <h2 className='otsikko'>Hakemus</h2>
        <p className='kuvaus'>Tästä voit täyttää suosituksen stipendinhakijalle. Vaihdathan valikosta oletko stipendin hakija vai suosittelija!</p>
        <form onSubmit={handleSubmit}>
        <label>
          Nimi/yhdistys/oppilaskunta:
          <input
            type="text"
            name="Sname"
            value={formData.Sname || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Sähköposti:
          <input
            type="text"
            name="Semail"
            value={formData.Semail || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Perustelut suositukselle
          <textarea
            name="Sperustelu"
            value={formData.Sperustelu || ''}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Allekirjoitus
          <input
            type="text"
            name="Sallekirjoitus"
            value={formData.Sallekirjoitus || ''}
            onChange={handleChange}
            required
          />
        </label>
        <button className='Lbutton' type="submit">Lähetä</button>
        </form>

      </div>
    )}
     </div>
     {submitted && <p className="confirmation">Hakemus on lähetetty!</p>}
  </div>
);
};


export default Lomake;