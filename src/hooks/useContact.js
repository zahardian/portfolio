const useContact = () => {
  const contacts = [
    {
      style: true,
      logo: "fa-solid fa-map-location-dot",
      title: "Location",
      title2: "Solo, Indonesia",
    },
    {
      style: false,
      logo: "fa-solid fa-envelope-open-text",
      title: "Email",
      title2: "zahardianreza@gmail.com",
    },
  ];
  return { contacts };
};

export default useContact;
