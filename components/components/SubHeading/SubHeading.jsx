import Image from "next/image";
import React from "react";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p
      className="p__cormorant"
      style={{ fontFamily: "var(--font-lobster)", fontWeight: "lighter" }}
    >
      {title}
    </p>
    <Image src={"/spoon.webp"} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
