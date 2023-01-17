import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import {GiFootprint} from "react-icons/gi";

const Navbar = () => {
  return (
    <navbar>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#skills">
        <GiSkills />
      </a>
      <a href="#about">
        <FcAbout />
      </a>
      <a href="#footer">
      <GiFootprint />
      </a>
    </navbar>
  );
};

export default Navbar;