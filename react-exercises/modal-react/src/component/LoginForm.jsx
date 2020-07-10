import React, { Component } from "react";
import "./modal.css";
import Modal from "./Modal";

export default class LoginForm extends Component {
  state = {
    username: "",
    password: "",
  };

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
    this.props.onClose();
  };

  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} handleClose={this.closeModal}>
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
        </Modal>
      </div>
    );
  }
}
