import React from "react";
import "./modal.css";

class SignUpModal extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    emailId: "",
    mobileNumber: "",
    localAddress: "",
    permanentAddress: "",
  };

  handleInputChange = (event) => {
    let value =
      event.target.type == "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState({ [event.target.name]: value });
    if (event.target.type == "checked" && event.target.checked) {
      this.setState({ permanentAddress: this.state.localAddress });
    } else {
      this.setState({
        permanentAddress: this.state.permanentAddress,
      });
    }
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    localStorage.setItem("firstName", this.state.firstName);
    localStorage.setItem("lastName", this.state.lastName);
    localStorage.setItem("emailId", this.state.emailId);
    localStorage.setItem("mobileNumber", this.state.mobileNumber);
    localStorage.setItem("password", this.state.password);
  };
  closeModal = (event) => {
    this.props.onClose();
  };

  render() {
    const showHideModal = this.props.status
      ? "modal-container display-block"
      : "modal-container display-none";
    return (
      <div className={showHideModal}>
        <div className="main-modal">
          <button onClick={(e) => this.closeModal(e)}>close</button>

          <form onSubmit={this.handleFormSubmit}>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              onChange={this.handleInputChange}
              value={this.state.firstName}
              required
              //   ref={(input) => (this.firstName = input)}
            />
            <br />
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              onChange={this.handleInputChange}
              value={this.state.lastName}
              required

              //   ref={(input) => (this.lastName = input)}
            />
            <br />
            <label>Password</label>
            <input
              type="text"
              name="password"
              placeholder="Enter password"
              onChange={this.handleInputChange}
              value={this.state.password}
              required
            />
            <br />
            <label>Confirm Password</label>
            <input
              type="text"
              name="confirmPassword"
              placeholder="Enter confirm password"
              onChange={this.handleInputChange}
              value={this.state.confirmPassword}
            />
            <br />
            <label>Gender:</label>
            <input
              class="one-line-display"
              type="radio"
              name="gender"
              value="male"
              onChange={this.handleInputChange}
            />
            Male
            <input
              className="one-line-display"
              type="radio"
              name="gender"
              value="female"
              onChange={this.handleInputChange}
            />
            Female
            <input
              className="one-line-display"
              type="radio"
              name="gender"
              value="others"
              onChange={this.handleInputChange}
            />
            Others
            <br />
            <label>Email-Id</label>
            <input
              type="text"
              name="emailId"
              placeholder="Enter Email Id"
              onChange={this.handleInputChange}
              value={this.state.emailId}
              required

              //   ref={(input) => (this.emailId = input)}
            />
            <br />
            <label>Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              placeholder="Enter Mobile number"
              onChange={this.handleInputChange}
              value={this.state.mobileNumber}

              //   ref={(input) => (this.mobileNumber = input)}
            />
            <br />
            <label>Local Address:</label>
            <input
              type="text"
              name="localAddress"
              onChange={this.handleInputChange}
              value={this.localAddress}
            />
            <br />
            <p>
              <input
                type="checkbox"
                className="one-line-display"
                name="checkboxState"
                checked={this.state.checkboxState}
                onChange={this.handleInputChange}
              />
              If Permanet address is same as above address
            </p>
            <label>Permanet Address:</label>
            <input
              type="text"
              name="permanentAddress"
              onChange={this.handleInputChange}
              value={
                this.state.checkboxState == true
                  ? this.state.localAddress
                  : this.state.permanentAddress
              }
              disabled={this.state.checkboxState == true ? true : false}
            />
            <br />
            <input type="submit" value="SignUp" />
          </form>
        </div>
      </div>
    );
  }
}
export default SignUpModal;
