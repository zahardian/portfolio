import React from "react";

const Project = () => {
  return (
    <>
      <section
        id="project"
        className="relative max-w-lg mx-5 mb-40 md:max-w-xl md:mx-auto xl:max-w-5xl xl:mx-auto"
      >
        <div className="container mx-auto">
          <div className="project-content text-center">
            <p className="text-lg font-extrabold text-indigo-800 uppercase mb-4 tracking-wide">
              Portfolio
            </p>
            <h3 className="text-white text-3xl font-bold mb-20 tracking-wide md:text-2xl">
              Each project is a unique piece of development
            </h3>
            <div className="project-grid space-y-20">
              {/* <!-- project 1 --> */}
              <div className="pro_1 gap-10 shadow-lg shadow-indigo-800 rounded-2xl items-center p-4 xl:flex">
                <div className="pro_img w-full h-80 overflow-hidden rounded-2xl mb-4 xl:w-3/4">
                  <a
                    href="https://dev-modernproduct.pantheonsite.io/"
                    target="_blank"
                  >
                    <div className="box box-4" />
                  </a>
                </div>
                <div className="pro_text justify-end xl:w-1/2">
                  <h3 className="text-white text-lg font-extrabold tracking-wide relative uppercase mb-4">
                    Product Digital
                  </h3>
                  <p className="text-lg font-medium text-gray-500">
                    We’re Vektora – combining both of aesthetics and usability
                    in every design we made Vektora Studio was founded on 2020
                    in Surakarta, Indonesia. Currently we have several members
                    that working onsite and remote who always ready to actualize
                    clients’ vision into reality.
                  </p>
                  <div className="link space-x-10 justify-evenly mt-8 items-center text-white">
                    <a
                      href=""
                      target="_blank"
                      className="text-lg tracking-wide font-semibold hover:text-indigo-800"
                    >
                      Code <i className="fa-brands fa-github text-3xl" />
                    </a>
                    <a
                      href="https://dev-modernproduct.pantheonsite.io/"
                      target="_blank"
                      className="text-lg tracking-wide font-semibold hover:text-indigo-800"
                    >
                      Live Demo{" "}
                      <i className="fa-solid fa-arrow-up-right-from-square text-2xl" />
                    </a>
                  </div>
                </div>
              </div>

              {/* project */}
              <div className="pro_1 gap-10 shadow-lg shadow-indigo-800 rounded-2xl items-center p-4 xl:flex">
                <div className="pro_img w-full h-80 overflow-hidden rounded-2xl mb-4 xl:w-3/4 xl:order-1">
                  <a href="https://movie-red-tau.vercel.app/" target="_blank">
                    <div className="box box-0" />
                  </a>
                </div>
                <div className="pro_text justify-end xl:w-1/2">
                  <h3 className="text-white text-lg font-extrabold tracking-wide relative uppercase mb-4">
                    Movies
                  </h3>
                  <p className="text-lg font-medium text-gray-500">
                    Where to watch movies online? A movie evening always starts
                    by a very time-consuming and frustrating search of where to
                    watch movies online. Zaza Movie is there to help you find
                    all the movies you can stream legally in Indonesia and make
                    your life easier.
                  </p>
                  <div className="link space-x-10 justify-evenly mt-8 items-center text-white">
                    <a
                      href="https://github.com/zahardian/movie"
                      target="_blank"
                      className="text-lg tracking-wide font-semibold hover:text-indigo-800"
                    >
                      Code <i className="fa-brands fa-github text-3xl" />
                    </a>
                    <a
                      href="https://movie-red-tau.vercel.app/"
                      target="_blank"
                      className="text-lg tracking-wide font-semibold hover:text-indigo-800"
                    >
                      Live Demo{" "}
                      <i className="fa-solid fa-arrow-up-right-from-square text-2xl" />
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- project 1 --> */}
              <div className="pro_1 gap-10 shadow-lg shadow-indigo-800 rounded-2xl items-center p-4 xl:flex">
                <div className="pro_img w-full h-80 overflow-hidden rounded-2xl mb-4 xl:w-3/4">
                  <a href="https://interior-rose.vercel.app/" target="_blank">
                    <div className="box box-1" />
                  </a>
                </div>
                <div className="pro_text justify-end xl:w-1/2">
                  <h3 className="text-white text-lg font-extrabold tracking-wide relative uppercase mb-4">
                    Ecommerce
                  </h3>
                  <p className="text-lg font-medium text-gray-500">
                    With a focus on simplicity and clean design, this store
                    prioritize user experience, making it easy for customers to
                    find and purchase the products they need.
                  </p>
                  <div className="link space-x-10 justify-evenly mt-8 items-center text-white">
                    <a
                      href="https://github.com/zahardian/interior"
                      target="_blank"
                      className="text-lg tracking-wide font-semibold hover:text-indigo-800"
                    >
                      Code <i className="fa-brands fa-github text-3xl" />
                    </a>
                    <a
                      href="https://interior-rose.vercel.app/"
                      target="_blank"
                      className="text-lg tracking-wide font-semibold hover:text-indigo-800"
                    >
                      Live Demo{" "}
                      <i className="fa-solid fa-arrow-up-right-from-square text-2xl" />
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- project 2 --> */}
              <div className="pro_1 gap-10 shadow-lg shadow-indigo-800 rounded-2xl items-center p-4 xl:flex">
                <div className="pro_img w-full h-80 overflow-hidden rounded-2xl mb-4 xl:w-3/4 xl:order-1">
                  <a
                    href="https://restaurant-website-alpha-eight.vercel.app/"
                    target="_blank"
                  >
                    <div className="box box-2" />
                  </a>
                </div>
                <div className="pro_text justify-end xl:w-1/2">
                  <h3 className="text-white text-lg font-extrabold tracking-wide relative uppercase mb-4">
                    Restaurant
                  </h3>
                  <p className="text-lg font-medium text-gray-500">
                    Restaurant sushi is an application that allows users to
                    search for information about various sushi menus in
                    real-time.
                  </p>
                  <div className="link space-x-10 justify-evenly mt-8 items-center text-white">
                    <a
                      href="https://github.com/zahardian/restaurant-website"
                      target="_blank"
                      className="text-lg tracking-wide font-semibold hover:text-indigo-800"
                    >
                      Code <i className="fa-brands fa-github text-3xl" />
                    </a>
                    <a
                      href="https://restaurant-website-alpha-eight.vercel.app/"
                      target="_blank"
                      className="text-lg tracking-wide font-semibold hover:text-indigo-800"
                    >
                      Live Demo{" "}
                      <i className="fa-solid fa-arrow-up-right-from-square text-2xl" />
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- project 3 --> */}
              <div className="pro_1 gap-10 shadow-lg shadow-indigo-800 rounded-2xl items-center p-4 xl:flex">
                <div className="pro_img w-full h-80 overflow-hidden rounded-2xl mb-4 xl:w-3/4">
                  <a
                    href="https://furniture-gamma-three.vercel.app/"
                    target="_blank"
                  >
                    <div className="box box-3" />
                  </a>
                </div>
                <div className="pro_text justify-end xl:w-1/2">
                  <h3 className="text-white text-lg font-extrabold tracking-wide relative uppercase mb-4">
                    Furniture
                  </h3>
                  <p className="text-lg font-medium text-gray-500">
                    Based in Paris, Zaniture offers the innovative spirit and
                    excellent craftsmanship that sets Jean Royère’s prolific
                    production apart.
                  </p>
                  <div className="link space-x-10 justify-evenly mt-8 items-center text-white">
                    <a
                      href="https://github.com/zahardian/furniture"
                      target="_blank"
                      className="text-lg tracking-wide font-semibold hover:text-indigo-800"
                    >
                      Code <i className="fa-brands fa-github text-3xl" />
                    </a>
                    <a
                      href="https://furniture-gamma-three.vercel.app/"
                      target="_blank"
                      className="text-lg tracking-wide font-semibold hover:text-indigo-800"
                    >
                      Live Demo{" "}
                      <i className="fa-solid fa-arrow-up-right-from-square text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
