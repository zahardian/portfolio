import Contacts from "../components/Contacts";

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
            <Contacts />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
