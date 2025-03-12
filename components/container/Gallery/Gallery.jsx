import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const galleryImages = [
    "/gallery01.webp",
    "/gallery02.webp",
    "/gallery03.webp",
    "/gallery04.webp",
  ];

  return (
    <div className="app__gallery section__padding" id="galerie">
      <SubHeading title="Instagram" />
      <h1 className="headtext__cormorant">Photo gallery</h1>

      <div className="app__gallery-content">
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Vous retrouverez toutes nos actualités, infos et spécialités sur notre
          compte Instagram !
        </p>
        <button type="button" className="custom__button">
          Instagram
        </button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
