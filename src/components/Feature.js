import React from "react";
import styles from "./Feature.module.scss";
import Illustration1 from "../assets/illustration-features-tab-1.svg";
import Illustration2 from "../assets/illustration-features-tab-2.svg";
import Illustration3 from "../assets/illustration-features-tab-3.svg";

const Feature = (props) => {
  let imageSrc;

  switch (props.image) {
    case 2:
      imageSrc = Illustration2;
      break;
    case 3:
      imageSrc = Illustration3;
      break;
    default:
      imageSrc = Illustration1;
  }

  return (
    <div className={styles.container}>
      <div className={styles["left-content"]}>
        <div className={styles["blue-shape"]}></div>
        <img className={styles.image} src={imageSrc} />
      </div>
      <div className={styles["right-content"]}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.subtitle}>{props.subtitle}</div>
        <a className={styles.button} href="/#">
          More info
        </a>
      </div>
    </div>
  );
};

export default Feature;
