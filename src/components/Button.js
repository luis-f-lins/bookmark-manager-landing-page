import React from "react";
import styles from "./Button.module.scss";

export default class Button extends React.Component {
  render() {
    return (
      <a
        className={styles.login}
        href="/#"
        style={{
          backgroundColor: this.props.color,
          color: this.props.textColor,
        }}
      >
        {this.props.text}
      </a>
    );
  }
}
