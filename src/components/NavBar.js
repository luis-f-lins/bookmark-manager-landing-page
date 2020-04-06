import React from "react";
import styles from "./NavBar.module.scss";
import variables from "../App.scss";
import LogoBookmark from "../assets/logo-bookmark.svg";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <a href="/#">
          <img alt="Logo" className={styles.logo} src={LogoBookmark}></img>
        </a>
        <div className={styles["link-container"]}>
          <a className={styles.link} href="/#">
            Features
          </a>
          <a className={styles.link} href="/#">
            Pricing
          </a>
          <a className={styles.link} href="/#">
            Contact
          </a>
          <a className={styles.login} href="/#">
            Login
          </a>
        </div>
      </div>
    );
  }
}
