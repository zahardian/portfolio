import useContact from "../hooks/useContact";

export default function Contacts() {
  const { contacts } = useContact();

  return (
    <>
      <div className="contact-icon mt-20 md:flex md:gap-40">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className={`contact_icon-box items-center xl:flex xl:gap-5 ${
              contact.style ? "mb-10" : "my-20 md:my-0 xl:mb-10"
            } `}
          >
            <span className="p-8 shadow-sm shadow-indigo-800 rounded-full xl:p-6">
              <i className={`${contact.logo} text-3xl text-indigo-800`} />
            </span>
            <div className="contact-info mt-14 xl:mt-0">
              <h3 className="text-xl font-bold text-white">{contact.title}</h3>
              <a href="/" className="hover:text-indigo-800">
                <p className="text-lg text-gray-500">{contact.title2}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
