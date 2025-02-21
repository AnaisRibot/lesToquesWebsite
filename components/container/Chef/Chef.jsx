import React from "react";
import Image from "next/image";
import { SubHeading } from "../../components";

const Chef = () => (
  <div className="app__bg section__padding" id="about">
    <SubHeading title="Un Mot Du Chef" />
    <h1 className="headtext__cormorant">Nos Valeurs</h1>

    <div className="app__wrapper_info" id="aboutInfo">
      <div className="app__wrapper_img app__wrapper_img-reverse" id="chefImg">
        <Image
          src="/chef.webp"
          width="883"
          height="1099"
          className="my_img"
          alt="Chef"
        />
      </div>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <Image src={"/quote.webp"} alt="Chef quote" />
          <p className="p__opensans">
            <strong>Le plaisir de faire plaisir...</strong> C&apos;est comme
            cela que je résume ma passion, mon métier.
            <br />
            Ici, uniquement des produits de qualité et de la fraîcheur. à bord
            de mon camion je redonne à la pizza ses lettres de noblesse alors
            Laissez-vous tenter et venez à ma rencontre !
          </p>
          <div className="app__chef-sign">
            <p>Patrice Ducher</p>
            <p className="p__opensans">Chef & Pizzaïolo</p>
            <Image id="signImg" src={"/sign.webp"} alt="sign" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
