Nettisivun muokkaus: 
1. Lataa VScode tietokoneelle 
Visual Studio Coden asentaminen ohje 
Asenna Visual Studio Code alla olevan linkin takaa. Visual Studio Code ei ole sama 
ohjelma kuin Microsoft Visual Studio. 
Lataa Windowsin asennusohjelma osoitteesta https://code.visualstudio.com/download 
Kun tiedoston lataaminen on valmis, tuplaklikkaa tiedostoa avataksesi 
asennusohjelma. 
Tämän jälkeen seuraa ruudulle tulevia ohjeita. 
2. Avaa kansio VScodeen 
Sanotaan, että haluatte muuttaa kohdekoulu listaa: 
3. Vasemalla näkyy PPTV-saatio kansio, components kansiosta avaa HakemusI kansio 
4. Avaa Hakemus.jsx tiedosto 
5. Navigoi koodi kohtaan, jossa lukee ”kohteet” ja näkyy kaikki kohdekoulut rivittäin 
Tässä kohdassa voit joko muuttaa olemassa olevaa kohdetta, poistaa kohteita tai lisätä uusia 
kohteita. Mikäli lisäät uuden kohteen, tee uusi rivi ja kirjoita kohdekoulun nimi siihen. 
HUOM! Muista tallentaa muutokset painamalla shift + S, tai menemällä 
vasemman yläkulman file kohtaan ja painamalla ”Save”. 

Miten päivittää uusi versio nettiin: 
1. VScodessa:  
a. Paina ctrl + shift + Ö samaan aikaan, tämä avaa terminaalin. 
b. Kirjoita terminaaliin komento: npm run build ja paina enter. 
c. Odota kunnes build on valmis 
d. PPTV-saatio kansioon tulee uusi kansio nimeltä ”dist” 
2. Googlessa: 
a. Avaa google ja mene osoitteeseen: http://plesk31.hostaan.fi/ 
b. Kirjaudu 
c. Avaa tiedostot välilehti  
d. Valitse kansio nimeltä ”httpdocs” 
e. Valitse assets kansio ja index tiedosto
f. Poista valitut tiedostot 
Jos et halua, poistaa tiedostoja, voit myös arkistoida ne. 
g. Paina plussa ikonia 
h. Paina ”lataa tiedosto”, tätä painamalla avautuu koneen tiedostot 
i. Avaa dist kansio 
j. Valitse index tiedosto 
k. Paina ”avaa” nappia 
l. Paina plussa ikonia 
m. Paina ”Lataa hakemisto” kohtaa 
n. Avaa tietokoneen resurssienhallinta 
o. Etsi dist kansio 
p. Etsi assets kansio 
q. Rahaa assets kansio pleskiin

MIT License

Copyright (c) React Training LLC 2015-2019 Copyright (c) Remix Software Inc. 2020-2021 Copyright (c) Shopify Inc. 2022-2023

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.