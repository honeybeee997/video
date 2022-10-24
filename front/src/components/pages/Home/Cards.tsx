import { FC } from "react";
import Card from "./Card";
import classes from "./Cards.module.css";
const Cards: FC = () => {
  return (
    <section className={classes.cards}>
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default Cards;
