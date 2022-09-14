import React from "react";
import { useState } from "react";
import { FormErrors } from "./FormErrors";

/* Marche pas en React
class Form extends React.Component<any, any>{
    render() {
        return (
            <div>
                <form>
                    <label>Enter your name:
                        <input type="text" />
                    </label>
                </form>
            </div>
        );
    }
}
*/

/* Version Function
function Form() {
    const [name, setName] = useState("");

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Entrer votre nom:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
    );
}
*/

class Form extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      asin: "",
      picture: "",
      formValid: false,
      nameValid: false,
      priceValid: false,
      asinValid: false,
      pictureValid: false,
      formErrors: { name: "", price: "", asin: "", picture: "" },
    };
  }

  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!this.state.formValid) {
      alert("Invalide Form");
    } else {
      alert(
        `The name you entered was: ${this.state.name} your price is : ${this.state.price}\n
        the picture links to : ${this.state.picture}`
      );
    }
  };

  handleUserInput = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateForm() {
    this.setState({
      formValid:
        this.state.nameValid &&
        this.state.priceValid &&
        this.state.pictureValid,
    });
  }

  validateField(field: String, value: any) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let priceValid = this.state.priceValid;
    let urlValid = this.state.pictureValid;

    switch (field) {
      case "name":
        nameValid =
          /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
            value
          );
        fieldValidationErrors.name = nameValid ? "" : " nom invalide";
        break;
      case "price":
        priceValid = !isNaN(value);
        console.log(priceValid);
        fieldValidationErrors.price = priceValid ? "" : " price invalide";
        break;
      case "picture":
        urlValid =
          /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi.test(
            value
          );
        fieldValidationErrors.picture = urlValid ? "" : " The URL is Invalid";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        nameValid: nameValid,
        priceValid: priceValid,
        pictureValid: urlValid,
      },
      this.validateForm
    );
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>{this.props.formTitle}</h1>
        <FormErrors formErrors={this.state.formErrors} />
        <form onSubmit={this.handleSubmit}>
          <label>
            Entrer le nom du produit:
            <input
              type="text"
              name="name"
              value={this.state.name || ""}
              onChange={this.handleUserInput}
            />
          </label>
          <label>
            Entrer votre prix:
            <input
              type="number"
              name="price"
              value={this.state.price || ""}
              onChange={this.handleUserInput}
            />
          </label>
          <label>
            Entrer votre asin:
            <input
              type="text"
              name="asin"
              value={this.state.asin || ""}
              onChange={this.handleUserInput}
            />
          </label>
          <label>
            Entrer votre lien photo:
            <input
              type="text"
              name="picture"
              value={this.state.picture || ""}
              onChange={this.handleUserInput}
            />
          </label>
          <button
            type="submit"
            disabled={!this.state.formValid}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
