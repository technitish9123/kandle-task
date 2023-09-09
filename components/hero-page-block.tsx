import React from "react";
import Image from "next/image";
type Props = {};

const HeroPageBlock = ({ data }: any) => {
  return (
    <div className="hero-block-child">
      <p>
        <span>{data.value}</span> {data.heading}
      </p>
      <div className="hero-block-child-desc">{data.description}</div>

      <Image
        src={`/assets/main/${data.svg}.svg`}
        alt="kandle Logo"
        width={230}
        height={150}
        priority
      />
    </div>
  );
};

export default HeroPageBlock;
