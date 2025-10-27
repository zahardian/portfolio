import { useState } from "react";

const useNavbar = () => {
  let links = [
    { name: "Home", tag: "home" },
    { name: "About", tag: "about" },
    { name: "Project", tag: "project" },
    { name: "Contact", tag: "contact" },
  ];
  const [open, setOpen] = useState(false);
  return { links, open, setOpen };
};

export default useNavbar;
