import React from "react";
import "./NavBar.scss";
import LogoBookmark from "../assets/logo-bookmark.svg";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="container">
        <img className="logo" src={LogoBookmark} alt="Logo"></img>
        <div className="link container">
          <a className="link" href="#">
            Features
          </a>
          <a className="link" href="#">
            Pricing
          </a>
          <a className="link" href="#">
            Contact
          </a>
          <a className="login" href="#">
            Login
          </a>
        </div>
      </div>
    );
  }
}
