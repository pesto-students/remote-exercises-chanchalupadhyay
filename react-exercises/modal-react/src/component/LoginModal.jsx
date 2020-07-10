import React, { Component } from "react";
import "./modal.css";

export default class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      username: "",
      password: "",
    };
  }

  /**
   * The method will bind the react component state with input
   * State of HTML(User Input.)
   * @param event {Event} Event A javascript Event Object
   */
  handleInputChange = (event) => {
    const newState = this.state;
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };
  /**
   * The method will override the default behavior of a
   * form on submission and will handle form submission.
   * @param event {Event} Event A javascript Event Object
   */
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    if (username === "sonutj" && password === "password") {
      alert("Login Successfull");
    } else {
      alert("Invalid username or password");
    }
    this.setState({
      ...this.state,
      password: "",
    });
  };
  /**
   * Close modal will handle the hiding o the modal when clicked on close button.
   * @param event {Event} Event A javascript Event Object
   */
  closeModal = (event) => {
    this.state.onClose();
  };

  render() {
    const showHideModal = this.state.status
      ? "modal-container display-block"
      : "modal-container display-none";
    return (
      <div className={showHideModal}>
        <div className="main-modal">
          <button onClick={this.closeModal}>close</button>
        </div>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="username">Username:*</label>
          <input
            onChange={this.handleInputChange}
            type="text"
            value={this.state.username}
            name="username"
            id="username"
          />
          <br />
          <label htmlFor="password">Password:*</label>
          <input
            onChange={this.handleInputChange}
            type="password"
            name="password"
            id="password"
            value={this.state.password}
          />
          <br />
          <input type="submit" value="Log In" />
        </form>
      </div>
    );
  }
}
