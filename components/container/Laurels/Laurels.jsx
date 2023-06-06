import React from "react";
import Image from "next/future/image";
import { SubHeading } from "../../components";
import { FaFacebook } from "react-icons/fa";

const Laurels = () => (
  <div className="app__bg section__padding" id="promos">
    <SubHeading title="Promos" />
    <h1 className="headtext__cormorant">Carte de fidelité</h1>
    <div className="app__wrapper_info" id="info__content">
      <h1 className="app_laurels-headtext_info">
        12 pizzas achetées = 1 pizza offerte !
      </h1>
      <div className="app__laurels-offer">
        <div
          className="app__wrapper_img"
          id="rewardImg"
          style={{ justifyContent: "flex-start" }}
        >
          <Image
            src={"/toquesReward.webp"}
            alt="laurels_img"
            width="549"
            height="433"
            className="rewardImg_img"
          />
          <h1 className="app__laurels-headtext">
            +{" "}
            <a
              href="https://www.facebook.com/profile.php?id=100057098964227"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook fill="#2374E1" />
            </a>{" "}
          </h1>
        </div>
        <div className="app__laurels-offer_info">
          <p className="p__opensans" id="laurels-offer_info">
            Pour profiter de l&apos;offre c&apos;est très simple :{" "}
          </p>
          <ul>
            <li className="p__opensans">Demandez votre carte de fidélité</li>
            <li className="p__opensans">
              likez notre page{" "}
              <a
                className="app__laurels-link"
                href="https://www.facebook.com/profile.php?id=100057098964227"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>{" "}
              pour obtenir votre code
            </li>
            <li className="p__opensans">
              Et bien sûr n&apos;oubliez pas de la faire tamponner à chaque
              passage !
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Laurels;
