import { FC, PropsWithChildren } from "react";
import { ImBooks } from "react-icons/im";
import classes from "./Navbar.module.css";
import NavLinks from "./NavLinks";

const Navbar: FC<PropsWithChildren> = () => {
  return (
    <aside className={classes.navbar}>
      <div className={classes.navBrand}>
        <ImBooks />
      </div>
      <NavLinks />
      <div className={classes.navbar_user_image}>
        <img src="/user.jpg" alt="user" />
      </div>
    </aside>
  );
};

export default Navbar;
