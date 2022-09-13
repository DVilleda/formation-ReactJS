import React from "react";
import { useState } from "react";
import { FormErrors } from "./FormErros";

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
      age: 0,
      formValid: false,
      nameValid: false,
      ageValid: false,
      formErrors: { name: "", age: "" },
    };
  }

  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!this.state.formValid) {
      alert("Invalide Form");
    } else {
      alert(
        `The name you entered was: ${this.state.name} your age is : ${this.state.age}`
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
    this.setState({ formValid: this.state.nameValid && this.state.ageValid });
  }

  validateField(field: String, value: any) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let ageValid = this.state.ageValid;

    switch (field) {
      case "name":
        nameValid =
          /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
            value
          );
        fieldValidationErrors.name = nameValid ? "" : " nom invalide";
        break;
      case "age":
        ageValid = isNaN(value);
        let ageInt = parseInt(value);
        ageValid = ageInt > 0 && ageInt < 101;
        fieldValidationErrors.age = ageValid ? "" : " age invalide";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        nameValid: nameValid,
        ageValid: ageValid,
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
            Entrer votre nom:
            <input
              type="text"
              name="name"
              value={this.state.name || ""}
              onChange={this.handleUserInput}
            />
          </label>
          <label>
            Entrer votre age:
            <input
              type="number"
              name="age"
              value={this.state.age || ""}
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
