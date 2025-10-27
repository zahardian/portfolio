import useNavbar from "../hooks/useNavbar";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const { links, open, setOpen } = useNavbar();

  return (
    <>
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
                <Link
                  smooth={true}
                  to={link.tag}
                  onClick={() => setOpen(!open)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
