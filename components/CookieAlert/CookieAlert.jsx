import { useEffect, useState } from 'react';
import './CookieAlert.css';

const Alert = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const accepted = localStorage.getItem('cookiesAccepted');
      if (!accepted) {
        setVisible(true);
      }
    }, []);
  
    const handleAccept = () => {
      localStorage.setItem('cookiesAccepted', 'true');
      setVisible(false);
    };
  
    const handleCancel = () => {
      localStorage.setItem('cookiesAccepted', 'false');
      setVisible(false);
    };
  
    if (!visible) return null;


return (
    <div className="cookie-banner">
      <p>
        Tämä sivusto käyttää evästeitä parhaan käyttökokemuksen takaamiseksi.
      </p>
      <div className="cookie-buttons">
      <button className="accept-button" onClick={handleAccept}>Hyväksy</button>
      <button className="cancel-button" onClick={handleCancel}>Peruuta</button>
      </div>
    </div>
  );
};

export default Alert;
