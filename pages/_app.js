import "../components/components/Menuitem/MenuItem.css";
import "../components/components/Navbar/Navbar.css";
import "../components/components/Newsletter/Newsletter.css";
import "../components/components/Newsletter/FooterOverlay.css";
import "../components/container/Chef/Chef.css";
import "../components/container/Contact/Contact.css";
import "../components/container/Findus/FindUs.css";
import "../components/container/Footer/Footer.css";
import "../components/container/Header/Header.css";
import "../components/container/Intro/Intro.css";
import "../components/container/Laurels/Laurels.css";
import "../components/container/Menu/SpecialMenu.css";
import "../styles/globals.css";
import "../styles/index.css";
import Layout from "../components/components/Layout";

import { Lobster, Bebas_Neue } from 'next/font/google';

const fontLobster = Lobster({
  variable: '--font-lobster',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const fontBebasNeue = Bebas_Neue({
  variable: '--font-bebas_neue',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${fontBebasNeue.variable} ${fontLobster.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
