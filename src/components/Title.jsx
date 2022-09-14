import { Component } from "react";
import styles from "./style.module.css";
import { AuthContext, LogIn, LogOut } from "./context/authContext";
import { Outlet, Link } from "react-router-dom";

class Title extends Component {
  static contextType = AuthContext;
  componentDidMount() {
    const user = this.context;
  }
  
  itemList = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "519" }];
  render() {
    return (
      <div>
        {this.context.auth}
        <h1 style={{ color: "Red" }}>{this.props.title}</h1>
        <h1 className={styles.bigblue}>La boutique de {this.props.name}</h1>

        {this.itemList.map((item) => (
          <li key={item.id}>
            <Link to={{ pathname: `/list/${item.id}` }}>Le lien {item.id}</Link>
          </li>
        ))}
      </div>
    );
  }
}

export default Title;
