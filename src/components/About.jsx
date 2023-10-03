import React from "react";

const About = () => {
  return (
    <>
      <section className="relative max-w-lg mx-5 mb-40 md:max-w-xl md:mx-auto xl:max-w-5xl xl:mx-auto">
        <div className="container mx-auto">
          <div className="about-content xl:flex xl:gap-20">
            <div className="img-side overflow-hidden xl:w-1/2">
              <img
                className="mb-10 rounded-2xl mx-auto"
                src="/images/about.jpg"
                alt="pic-about"
              />
            </div>
            <div className="text-side text-center xl:w-1/2 xl:text-left">
              <h3 className="text-lg font-extrabold text-indigo-800 uppercase tracking-wide mb-4">
                About Me
              </h3>
              <h4 className="text-white text-3xl font-bold mb-4 tracking-wide md:text-2xl">
                A dedicated Front-end Developer based in Solo, Indonesia.
              </h4>
              <p className="text-lg text-gray-500 font-medium xl:text-sm xl:leading-5 xl:tracking-wide">
                As a Junior Front-End Developer, I possess an impressive arsenal
                of skills in HTML, CSS, JavaScript, React, Tailwind, and Git. I
                excel in designing and maintaining responsive websites that
                offer a smooth user experience. My expertise lies in crafting
                dynamic, engaging interfaces through writing clean and optimized
                code and utilizing cutting-edge development tools and
                techniques. I am also a team player who thrives in collaborating
                with cross-functional teams to produce outstanding web
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
