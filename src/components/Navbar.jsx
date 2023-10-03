import React from "react";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  let links = [
    { name: "Home", tag: "home" },
    { name: "About", tag: "about" },
    { name: "Project", tag: "project" },
    { name: "Contact", tag: "contact" },
  ];
  const [open, setOpen] = useState(false);
  // const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      {/* <header>
        <nav className="relative py-2 px-8 w-full bg-black">
          <div className="container mx-auto">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold text-white">Dom</h1>
              <button className="sm:hidden">
                <i className="fa-solid fa-bars menu-bar" />
              </button>
              <div className="">
                <ul className="flex gap-8">
                  {links.map((link) => (
                    <>
                      <li className="text-base font-semibold text-slate-300 hover:text-indigo-600 cursor-pointer">
                        <Link smooth={true} to={link.tag}>
                          {link.name}
                        </Link>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="right-0 left-0 text-center p-5 bg-black text-white">
            <ul className="space-y-4">
              {links.map((link) => (
                <>
                  <li className="hover:text-indigo-600 cursor-pointer">
                    <Link smooth={true} to={link.tag} className="text-base">
                      {link.name}
                    </Link>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </nav>
      </header> */}
      {/*  */}
      <div className="bg-gray-950 w-full fixed top-0 z-50">
        <nav className="flex justify-between items-center py-4 px-8 md:py-6 md:px-20">
          <div>
            <h1 className="text-xl font-bold text-white">Zaza</h1>
          </div>
          <ul className="md:flex hidden gap-10 text-white font-semibold">
            {links.map((link) => (
              <li
                key={link.name}
                className="cursor-pointer hover:text-indigo-600"
              >
                <Link smooth={true} to={link.tag}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setOpen(!open)}
            className="md:hidden cursor-pointer text-xl absolute right-8 top-5 text-white"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
        </nav>
        <div className={`mobile ${open ? "block" : "hidden"} py-5`}>
          <ul className="md:hidden text-center text-white font-semibold space-y-4">
            {links.map((link) => (
              <li
                key={link.name}
                className="cursor-pointer hover:text-indigo-600"
              >
                <Link smooth={true} to={link.tag}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              pink Tailwind Starter Kit
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  smooth={true}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="about"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Share</span>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Tweet</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Pin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Navbar;
