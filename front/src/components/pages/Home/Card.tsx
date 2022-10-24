import { FC } from "react";
import { BsFillPeopleFill } from "react-icons/bs";

import classes from "./Cards.module.css";

const Card: FC = () => {
  return (
    <article className={classes.card}>
      <div>
        <span>
          <BsFillPeopleFill />
        </span>
        <h2>Friends</h2>
      </div>
      <p>23</p>
    </article>
  );
};

export default Card;
