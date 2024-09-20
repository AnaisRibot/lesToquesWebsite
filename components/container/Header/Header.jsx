import React from "react";
import Image from "next/future/image";
import { SubHeading } from "../../components";
import { sendClickEvent } from "../../components/GoogleAnalytics";

const Header = (props) => {
  return (
    <div className="app__header  section__padding" id="home">
      <SubHeading title="Bienvenue" />
      <h1 className="headtext__cormorant" id="header__title">
        Tous Toqués des pizzas&#8239;!
      </h1>

      <div className="app__wrapper_info" id="home__content">
        <div className="app__header-content">
          <p className="p__opensans" style={{ margin: "2rem 0" }}>
            Ici vous trouverez toutes les informations utiles pour nous trouver
            et commander vos pizzas. Le camion des toqués est aussi disponible
            pour tous vos évènements : Mariage, baptême, portes ouvertes, CE...
            N&apos;hésitez pas à nous contacter!
          </p>
          <p className="app__header-info_place">
            aujourd&apos;hui nous sommes : <span>{props.place}</span>
          </p>
          <button type="button" className="custom__button">
            <a href="#menu" onClick={() => sendClickEvent('Voir le Menu')}>Voir le Menu</a>
          </button>
        </div>
        <div className="app__wrapper_img" id="header__img">
          <Image
            src="/welcome2.webp"
            width="883"
            height="805"
            className="my_img"
            alt="header img"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
