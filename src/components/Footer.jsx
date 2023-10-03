import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="relative max-w-lg py-12 bg-gray-950 md:max-w-4xl xl:max-w-full">
        <div className="container mx-auto">
          <div className="footer text-center space-y-4 md:flex md:space-y-0 md:gap-60 xl:max-w-5xl xl:mx-auto xl:justify-between">
            <h3 className="font-extrabold text-white text-lg tracking-wide">
              Copyright © 2023. All rights are reserved
            </h3>
            <div className="footer-social flex gap-6 justify-center">
              <a href="/" className="text-2xl text-white">
                <i className="fa-brands fa-linkedin hover:text-indigo-400" />
              </a>
              <a href="/" className="text-2xl text-white">
                <i className="fa-brands fa-github hover:text-indigo-400" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
