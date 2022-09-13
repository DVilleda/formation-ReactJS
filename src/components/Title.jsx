import { Component } from "react";
import styles from "./style.module.css";
import { AuthContext, LogIn, LogOut } from "./context/authContext";

class Title extends Component {
  static contextType = AuthContext;
  componentDidMount() {
    const user = this.context;
  }
  render() {
    return (
      <div>
        {this.context.auth}
        <h1 style={{ color: "Red" }}>{this.props.title}</h1>
        <h1 className={styles.bigblue}>La boutique de {this.props.name}</h1>
      </div>
    );
  }
}

export default Title;
