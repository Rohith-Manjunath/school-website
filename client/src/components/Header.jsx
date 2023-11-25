import { NavLink } from "react-router-dom";
import logoImage from "../assets/images/logo-2-v2.png";

const Header = () => {
  return (
    <header className="flex items-center justify-center bg-[#084463] p-1 h-auto sticky z-20 top-0">
      <nav className="flex items-center justify-around w-full">
        <ul className="flex items-center justify-around w-full">
          <li className="font-bold text-[1.1rem] text-white">
            <NavLink to="/" className="tracking-[1px]">
              Home
            </NavLink>
          </li>
          <li className="font-bold text-[1.1rem] text-white">
            <NavLink to="/admissions" className="tracking-[1px]">
              Admissions
            </NavLink>
          </li>
          <li className="font-bold text-[1.1rem] text-white">
            <NavLink to="/academics" className="tracking-[1px]">
              Academics
            </NavLink>
          </li>
          <li className="font-semibold text-white">
            <img
              src={logoImage}
              className="transition-all duration-500 w-[8rem]"
              alt="website-logo"
            />
          </li>
          <li className="font-bold text-[1.1rem] text-white">
            <NavLink to="/our-team" className="tracking-[1px]">
              OurTeam
            </NavLink>
          </li>
          <li className="font-bold text-[1.1rem] text-white">
            <NavLink to="/" className="tracking-[1px]">
              About Us
            </NavLink>
          </li>
          <li className="font-bold text-[1.1rem] text-white">
            <NavLink to="/" className="tracking-[1px]">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
