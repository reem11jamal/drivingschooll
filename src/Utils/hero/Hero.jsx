import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <section
        id='hero'
        class='d-flex justify-content-center align-items-center h-75'>
        <div
          class='container position-relative'
          data-aos='zoom-in'
          data-aos-delay='100'>
          <h1>Learning Today</h1>
          <h2>
            We are team of talented designers making websites with Bootstrap
          </h2>
          <a href='' class='btn-get-started'>
            Get Started
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
