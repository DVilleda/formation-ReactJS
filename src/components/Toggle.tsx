import React, { Component } from "react";

type props = {};

interface myState {
  isToggleOn: boolean;
  isComponent: number;
}
class Toggle extends React.Component<props, myState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isToggleOn: false,
      isComponent:12
    };
    // Cette liaison est nécéssaire afin de permettre    // l'utilisation de `this` dans la fonction de rappel.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

export default Toggle;
