import React from "react";
import styles from "./Features.module.scss";
import Feature from "./Feature.js";

export default class Features extends React.Component {
  state = {
    activeOption: "feature-1",
  };

  returnActiveStyle() {
    if (this.state.activeOption === "feature-2") {
      return styles["feature-2"];
    } else if (this.state.activeOption === "feature-3") {
      return styles["feature-3"];
    } else {
      return styles["feature-1"];
    }
  }

  renderActiveFeature() {
    let title;
    let subtitle;
    let image;

    if (this.state.activeOption === "feature-2") {
      title = "Intelligent search";
      subtitle = `Our powerful search feature will help you find saved sites in no time at all. 
      No need to trawl through all of your bookmarks.`;
      image = 2;
    } else if (this.state.activeOption === "feature-3") {
      title = "Share your bookmarks";
      subtitle = `Easily share your bookmarks and collections with others. Create a shareable 
      link that you can send at the click of a button.`;
      image = 3;
    } else {
      title = "Bookmark in one click";
      subtitle = `Organize your bookmarks however you like. Our simple drag-and-drop interface 
      gives you complete control over how you manage your favourite sites.`;
      image = 1;
    }

    return <Feature title={title} subtitle={subtitle} image={image} />;
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>Features</div>
        <div className={styles.subtitle}>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </div>
        <div className={styles["feature-options"]}>
          <div
            className={styles.featureOption}
            onClick={() => this.setState({ activeOption: "feature-1" })}
          >
            Simple Bookmarking
          </div>
          <div
            className={styles.featureOption}
            onClick={() => this.setState({ activeOption: "feature-2" })}
          >
            Speedy Searching
          </div>
          <div
            className={styles.featureOption}
            onClick={() => this.setState({ activeOption: "feature-3" })}
          >
            Easy Sharing
          </div>
        </div>
        <div
          className={`${styles.orangeHighlight} ${this.returnActiveStyle()}`}
        ></div>
        <div className={styles.separator}></div>
        {this.renderActiveFeature()}
      </div>
    );
  }
}
