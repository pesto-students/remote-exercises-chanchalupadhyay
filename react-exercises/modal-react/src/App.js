import React from "react";
import "./App.css";
import LoginModal from "./component/LoginModal";
import SignUpModal from "./component/SignUpModal";

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
        <LoginModal
          status={this.state.statusOfLoginModal}
          onClose={this.handleCloseLoginModal}
        ></LoginModal>
        <SignUpModal
          status={this.state.statusOfSignUpModal}
          onClose={this.handleCloseSignUpModel}
        ></SignUpModal>
        <button onClick={this.handleOpenSignUpModal}>SignUp</button>
        <button onClick={this.handleOpenLoginModal}>Login</button>
      </div>
    );
  }
}
export default App;
