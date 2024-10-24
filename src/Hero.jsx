import React from "react";

import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            similique ab, quasi nesciunt reprehenderit sequi accusamus quo fugit
            deserunt facere unde ut eum? Temporibus unde quae velit amet optio
            quia, rem commodi similique fugiat. Amet eveniet, dignissimos veniam
            fuga deleniti et at possimus odit cum cumque sit accusamus repellat
            quo pariatur
          </p>
        </div>

        <div className="img-container">
          <img src={heroImg} alt="woman and browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
