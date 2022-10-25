import {
  Chef,
  FindUs,
  Gallery,
  Header,
  Contact,
  Laurels,
  SpecialMenu,
} from "../components/container";
import { places, maps } from "../constants/data";

export default function Home() {
  let now = new Date();

  return (
    <div>
      <Header place={places[now.getDay()]} />
      <Chef />
      <SpecialMenu />
      <FindUs place={places[now.getDay()]} map={maps[now.getDay()]} />
      <Contact />
      <Gallery />
      <Laurels />
    </div>
  );
}
