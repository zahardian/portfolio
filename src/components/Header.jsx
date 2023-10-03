import React from "react";

const Header = () => {
  return (
    <>
      <section
        id="home"
        className="relative max-w-lg mx-5 mb-40 pt-16 md:max-w-xl md:mx-auto xl:max-w-5xl xl:mx-auto"
      >
        <div className="container mx-auto">
          <div className="content">
            <div className="hero-main mt-5 items-center justify-center relative xl:flex xl:gap-20">
              <div className="hero-img w-64 h-64 md:w-96 md:h-96 relative mx-auto rounded-full my-14 xl:order-1 xl:w-1/2 bg-cover bg-center" />
              <div className="hero-text relative text-center my-10 xl:w-2/3 xl:text-left">
                <h1 className="text-white text-4xl mb-8 font-extrabold font-inter tracking-wider md:text-5xl">
                  Front-End React Developer 🖐
                </h1>
                <p className="text-xl mb-8 font-medium text-gray-500 font-inter tracking-wide">
                  Hi, I'm Reza Rahardiansyah. A passionate Front-end React
                  Developer based in Solo, Indonesia.
                </p>
                <span className="cursor-pointer space-x-5">
                  <a href="/" className="text-3xl">
                    <i className="fa-brands fa-linkedin hover:text-indigo-800 text-white" />
                  </a>
                  <a href="/" className="text-3xl">
                    <i className="fa-brands fa-github hover:text-indigo-800 text-white" />
                  </a>
                </span>
              </div>
            </div>
            <div className="skills items-center lg:top-[480px] xl:flex xl:mt-5">
              <div className="logos lg:flex items-center">
                <p className="text-slate-200 text-lg font-inter border-b-2 w-24 mx-auto border-gray-600 mb-10 xl:border-b-0 xl:border-r-2 xl:w-28 xl:mb-0">
                  Tech Stack
                </p>
                <ul
                  id="about"
                  className="flex flex-wrap gap-6 justify-center px-5 xl:ml-20"
                >
                  <li className="items-center cursor-pointer flex h-16 justify-center w-16 shadow-md shadow-indigo-800 rounded-full">
                    <img
                      src="/images/logo-html.svg"
                      alt="html"
                      className="w-10 h-10"
                    />
                  </li>
                  <li className="items-center cursor-pointer flex h-16 justify-center w-16 shadow-md shadow-indigo-800 rounded-full">
                    <img
                      src="/images/logo-css.svg"
                      alt="css"
                      className="w-10 h-10"
                    />
                  </li>
                  <li className="items-center cursor-pointer flex h-16 justify-center w-16 shadow-md shadow-indigo-800 rounded-full">
                    <img
                      src="/images/logo-js.svg"
                      alt="javascript"
                      className="w-10 h-10"
                    />
                  </li>
                  <li className="items-center cursor-pointer flex h-16 justify-center w-16 shadow-md shadow-indigo-800 rounded-full">
                    <img
                      src="/images/logo-tailwind.svg"
                      alt="tailwind"
                      className="w-9 h-9"
                    />
                  </li>
                  <li className="items-center cursor-pointer flex h-16 justify-center w-16 shadow-md shadow-indigo-800 rounded-full">
                    <img
                      src="/images/logo-react.svg"
                      alt="react"
                      className="w-9 h-9"
                    />
                  </li>
                  <li className="items-center cursor-pointer flex h-16 justify-center w-16 shadow-md shadow-indigo-800 rounded-full">
                    <img
                      src="/images/logo-git.svg"
                      alt="git"
                      className="w-10 h-10"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
