import React from "react";
import styles from "./Highlighted.module.scss";
import IllustrationHero from "../assets/illustration-hero.svg";

export default class Highlighted extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles["left-content"]}>
          <div className={styles.title}>A Simple Bookmark Manager</div>
          <div className={styles.subtitle}>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </div>
          <div className={styles.links}>
            <a className={`${styles.button} ${styles.chrome}`} href="/#">
              Get it on Chrome
            </a>
            <a className={`${styles.button} ${styles.firefox}`} href="/#">
              Get it on Firefox
            </a>
          </div>
        </div>
        <div className={styles["right-content"]}>
          <div className={styles["blue-shape"]}></div>
          <img className={styles.image} src={IllustrationHero} />
        </div>
      </div>
    );
  }
}
