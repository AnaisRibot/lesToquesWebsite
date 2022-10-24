import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

const Footer = () => (
  <div className=" app__footer" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <img src={'/toques.png'} alt="footer_logo" />
        <p className="p__opensans">07 65 50 72 42</p>
        <p className="p__opensans">lestoques27@gmail.com</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">La tournée (en soirée 18h) :</h1>
        <p className="p__opensans">Lundi : Pacy-sur-Eure, rue Edouard Isambard </p>
        <p className="p__opensans">Mardi : boisset-les-prévanches</p>
        <p className="p__opensans">Mercredi : Le Cormier</p>
        <p className="p__opensans">jeudi : Rolleboise</p>
        <p className="p__opensans">Vendredi : évreux, Faubourg Saint-léger</p>

      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Les toqués de la pizza. Tout droit réservé.</p>
    </div>

  </div>
);

export default Footer;
