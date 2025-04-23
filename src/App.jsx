import React from 'react';
import Etusivu from '../components/EtusivuN/Etusivu';
import Lomake from '../components/HakemusI/Hakemus'
import Historia from '../components/HistoriaN/Historia';
import OtaYhteytta from '../components/OtaYhteytta/OtaYhteytta';
import UKK from '../components/UKKI/UKK';

const App = () => {
  return (
    <div>
      <Etusivu />
      <Lomake />
      <Historia />
      <OtaYhteytta />
      <UKK />
    </div>
  );
};

export default App;