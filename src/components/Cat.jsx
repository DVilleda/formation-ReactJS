import React from "react";

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
        style={{ position: "absolute", left: mouse.x, top: mouse.y }}
        width="100px"
      />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {/*
            Au lieu de fournir une représentation statique de ce qu’affiche <Mouse>,
            utilisez la prop `render` pour déterminer dynamiquement quoi afficher.
          */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Déplacez votre souris sur l’écran !</h1>
        <Mouse render={(mouse) => <Cat mouse={mouse} />} />
      </div>
    );
  }
}

export default MouseTracker;
