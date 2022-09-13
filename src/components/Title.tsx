import { Component } from "react";
import styles from "./style.module.css";

class Title extends Component<any, any> {
  render() {
    return (
      <div>
        <h1 style={{ color: "Red" }}>{this.props.title}</h1>
        <h1 className={styles.bigblue}>La boutique de {this.props.name}</h1>
      </div>
    );
  }
}

export default Title;
