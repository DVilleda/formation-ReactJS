import React from "react";

class Product extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isToggleOn: false,
    };
    // Cette liaison est nécéssaire afin de permettre    // l'utilisation de `this` dans la fonction de rappel.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state: { isToggleOn: boolean }) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render(): React.ReactNode {
    return (
      <div>
        <table style={{ border: "5px solid" }}>
          <tr>
            <td style={{ border: "1px solid" }}>
              {this.props.product.name}&nbsp;
            </td>
            <td style={{ border: "1px solid" }}>
              {this.props.product.price}&nbsp;
            </td>
            <td style={{ border: "1px solid" }}>
              {this.props.product.asin}&nbsp;
            </td>
            <td style={{ border: "1px solid" }}>
              <img src={this.props.product.picture} alt="" width="50px" />
              &nbsp;
            </td>
            <td style={{ border: "1px solid" }}>
              <button onClick={this.handleClick}>
                {this.state.isToggleOn ? "ON" : "OFF"}
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
export default Product;
