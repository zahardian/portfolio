import Skill from "../components/Skill";
import SocialMedia from "../components/SocialMedia";

const Header = () => {
  return (
    <>
      <section
        id="home"
        className="relative max-w-lg mx-5 mb-40 pt-16 md:max-w-xl md:mx-auto xl:max-w-5xl xl:mx-auto"
      >
        <div className="container mx-auto">
          <div className="content">
            <div className="hero-main mt-5 items-center justify-center relative xl:flex">
              <div className="hero-img w-64 h-64 md:w-96 md:h-96 relative mx-auto rounded-full my-14 xl:order-1 overflow-hidden">
                <img
                  src="/images/pic-profile.png"
                  alt="Reza Rahardiansyah"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="hero-text relative text-center my-10 xl:w-2/3 xl:text-left">
                <h1 className="text-white text-4xl mb-8 font-extrabold font-inter tracking-wider md:text-5xl">
                  Front-End React Developer 🖐
                </h1>
                <p className="text-xl mb-8 font-medium text-gray-500 font-inter tracking-wide">
                  Hi, I'm Reza Rahardiansyah. A passionate Front-end React
                  Developer based in Solo, Indonesia.
                </p>
                <SocialMedia />
              </div>
            </div>
            <div className="skills items-center lg:top-[480px] xl:flex xl:mt-5">
              <div className="logos lg:flex items-center">
                <p className="text-slate-200 text-lg font-inter border-b-2 w-24 mx-auto border-gray-600 mb-10 xl:border-b-0 xl:border-r-2 xl:w-28 xl:mb-0">
                  Tech Stack
                </p>
                <Skill />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
