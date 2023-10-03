import React from "react";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="relative max-w-lg mx-5 md:max-w-xl md:mx-auto xl:max-w-5xl xl:mx-auto"
      >
        <div className="container mx-auto">
          <div className="contact-content text-center md:text-left">
            <div className="contact-title">
              <p className="text-lg font-extrabold text-indigo-800 mb-4 tracking-wide uppercase">
                Contact
              </p>
              <h3 className="text-white text-3xl font-bold tracking-wide mb-4 xl:text-2xl">
                Don't be shy! Hit me up! 👇
              </h3>
            </div>
            <div className="contact-icon mt-20 md:flex md:gap-40">
              <div className="contact_icon-box items-center mb-10 xl:flex xl:gap-5">
                <span className="p-8 shadow-sm shadow-indigo-800 rounded-full xl:p-6">
                  <i className="fa-solid fa-map-location-dot text-3xl text-indigo-800" />
                </span>
                <div className="contact-info mt-14 xl:mt-0">
                  <h3 className="text-xl font-bold text-white">Location</h3>
                  <a href="/" className="hover:text-indigo-800">
                    <p className="text-lg text-gray-500">Solo, Indonesia</p>
                  </a>
                </div>
              </div>
              <div className="contact_icon-box items-center my-20 md:my-0 xl:flex xl:mb-10 xl:gap-5">
                <span className="p-8 shadow-sm shadow-indigo-800 rounded-full xl:p-6">
                  <i className="fa-solid fa-envelope-open-text text-3xl text-indigo-800" />
                </span>
                <div className="contact-info mt-14 xl:mt-0">
                  <h3 className="text-xl font-bold text-white">Mail</h3>
                  <a href="/" className="hover:text-indigo-800">
                    <p className="text-lg text-gray-500">
                      rahardiansyah20@gmail.com
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
