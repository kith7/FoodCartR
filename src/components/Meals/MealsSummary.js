import React from "react";
import classes from "./MealsSummary.module.css";
export const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious food home delivered</h2>
      <p>
        Choose the most delicious meals on earth from our borad selection and
        enjoy a delicious lunch, dinner, at home
      </p>
      <p>
        Our meals are cooked by best cooks from our region with high quality
        ingredients , just in time and of course with taste
      </p>
    </section>
  );
};
