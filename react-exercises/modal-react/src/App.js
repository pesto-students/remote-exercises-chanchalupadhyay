import React from "react";
import "./App.css";
import LoginForm from "./component/LoginForm";
import SignUpForm from "./component/SignUpForm";

class App extends React.Component {
  state = {
    statusOfSignUpModal: false,
    statusOfLoginModal: false,
  };

  handleOpenSignUpModal = () => {
    this.setState({ statusOfSignUpModal: true });
  };
  handleOpenLoginModal = () => {
    this.setState({ statusOfLoginModal: true });
  };
  handleCloseLoginModal = () => {
    this.setState({ statusOfLoginModal: false });
  };
  handleCloseSignUpModel = () => {
    this.setState({ statusOfSignUpModal: false });
  };
  render() {
    return (
      <div>
        <LoginForm
          isOpen={this.state.statusOfLoginModal}
          onClose={this.handleCloseLoginModal}
        ></LoginForm>
        <SignUpForm
          isOpen={this.state.statusOfSignUpModal}
          onClose={this.handleCloseSignUpModel}
        ></SignUpForm>
        <button onClick={this.handleOpenSignUpModal}>SignUp</button>
        <button onClick={this.handleOpenLoginModal}>Login</button>
      </div>
    );
  }
}
export default App;
