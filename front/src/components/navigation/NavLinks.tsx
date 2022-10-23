import NavLink from "./NavLink";
import { AiFillHome } from "react-icons/ai";
import { HiVideoCamera } from "react-icons/hi";
import { FaBell } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import classes from "./Navbar.module.css";

const NavLinks = () => {
  return (
    <ul className={classes.navList}>
      <NavLink to="/" icon={<AiFillHome />} />
      <NavLink to="/video" icon={<HiVideoCamera />} />
      <NavLink to="/notifications" icon={<FaBell />} />
      <NavLink to="/messages" icon={<RiMessage3Fill />} />
      <NavLink to="/friends" icon={<BsFillPeopleFill />} />
    </ul>
  );
};

export default NavLinks;
