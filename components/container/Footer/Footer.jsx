import React from "react";
import Image from "next/image";
import { FiFacebook, FiInstagram } from "react-icons/fi";

const Footer = () => (
  <div className=" app__footer" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <Image
          src={"/toques.webp"}
          alt="footer logo"
          width="250"
          height="67"
          className="app__footer-links_contact-img"
        />

        <p className="p__opensans">07 65 50 72 49</p>
        <p className="p__opensans">lestoquesdelapizza27@gmail.com</p>
        <div className="app__footer-links_icons">
          <a
            href="https://www.facebook.com/profile.php?id=100057098964227"
            target="_blank"
            rel="noreferrer"
          >
            <FiFacebook />
          </a>
          <a
            href="https://www.instagram.com/lestoquesdelapizza/"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">La tournée (en soirée 18h) :</h1>
        <p className="p__opensans">
          Lundi : Pacy-sur-Eure, rue Edouard Isambard{" "}
        </p>
        <p className="p__opensans">Mardi : boisset-les-prévanches</p>
        <p className="p__opensans">Mercredi : Le Cormier</p>
        <p className="p__opensans">jeudi : Rolleboise</p>
        <p className="p__opensans">Vendredi : évreux, Faubourg Saint-léger</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        2023. Les toqués de la pizza. Tout droit réservé.
      </p>
    </div>
  </div>
);

export default Footer;
