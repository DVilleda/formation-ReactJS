import React, { Component } from "react";
import styles from "./style.module.css";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";

//React.Component une autre option si on veut l'objet au complet
class Http2 extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      message: "",
      loading: true,
    };
  }
  componentDidMount(): void {
    this.setState({ loading: true });
    
    axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
      this.setState({ message: res.data.message });
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.message} alt="" />
      </div>
    );
  }
}
export default Http2;
