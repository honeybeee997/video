import { FC, PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

interface linkItem {
  to: string;
  icon: React.ReactNode;
}

const NavLink: FC<PropsWithChildren<linkItem>> = (props) => {
  const { pathname } = useLocation();

  const active = pathname === props.to ? styles.active : "";

  return (
    <li className={active}>
      <Link to={props.to}>{props.icon}</Link>
    </li>
  );
};

export default NavLink;
