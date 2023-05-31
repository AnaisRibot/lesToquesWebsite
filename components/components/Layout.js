import React from "react";
import Head from "next/head";
import { Footer } from "../container";
import { Navbar } from "./";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Camion à Pizza | PACY-SUR-EURE, BOISSET-LES-PREVANCHES, CORMIER, ROLLEBOISE, EVREUX.
         Vous souhaitez déguster une excellente pizza faite uniquement avec des produits frais et de qualités ? N'hésitez pas et commandez au +33765507242 ou venez directement nous rencontrez sur place. 
         Nous sommes ouverts du lundi au vendredi à partir de 18h. Nous organisons aussi vos évènements (Mariage, Baptême, CE, portes ouvertes), contactez-nous directement sur le site ou via lestoquesdelapizza.27@gmail.com pour tout renseignement et devis"
        />
        <meta
          name="keywords"
          content="Camion à pizza, LES TOQUES DE LA PIZZA, PACY SUR EURE, BOISSET-LES-PREVANCHES, CORMIER, ROLLEBOISE, EVREUX, Événements privés, À emporter, food truck"
        />
        <meta name="phone" content="+33765507242" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Les Toqués de la Pizza</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
