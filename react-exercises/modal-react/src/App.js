import React from "react";
import "./App.css";
import LoginModal from "./component/LoginModal";
import SignUpModal from "./component/SignUpModal";

class App extends React.Component {
  state = {
    statusOfSignUpModal: false,
    statusOfLoginModal: false,
  };

  openSignUpModal = () => {
    console.log("signUp");
    this.setState({ statusOfSignUpModal: true });
  };
  openLoginModal = () => {
    console.log("Login");

    this.setState({ statusOfLoginModal: true });
  };
  render() {
    return (
      <div>
        <button onClick={this.openSignUpModal}>SignUp</button>
        <button onClick={this.openLoginModal}>Login</button>

        <LoginModal status={this.state.statusOfLoginModal}></LoginModal>
        <SignUpModal status={this.state.statusOfSignUpModal}></SignUpModal>
      </div>
    );
  }
}
export default App;
