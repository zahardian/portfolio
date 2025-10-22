import SocialMedia from "../components/SocialMedia";

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
              <SocialMedia />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
