import { FC, PropsWithChildren } from "react";
import Navbar from "../navigation/Navbar";

import classes from "./Layout.module.css";

const Layout: FC<PropsWithChildren> = (props) => {
  return (
    <div className={classes.layout}>
      <main>
        <Navbar />
        <div>{props.children}</div>
      </main>
    </div>
  );
};

export default Layout;
