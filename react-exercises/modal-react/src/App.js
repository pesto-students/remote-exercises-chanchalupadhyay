import React from "react";
import "./App.css";
import LoginModal from "./component/LoginModal";
import SignUpModal from "./component/SignUpModal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusOfSignUpModal: false,
      statusOfLoginModal: false,
    };
  }

  openSignUpModal = () => {
    console.log("signUp");
    this.setState({ statusOfSignUpModal: true });
  };
  openLoginModal = () => {
    console.log("Login");

    this.setState({ statusOfLoginModal: true });
  };

  /**
   * This method will help us closing the Modal.
   */
  handleCloseLoginModal = () => {
    this.setState({ statusOfLoginModal: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.openSignUpModal}>SignUp</button>
        <button onClick={this.openLoginModal}>Login</button>
        {this.state.statusOfLoginModal ? (
          <LoginModal
            status={this.state.statusOfLoginModal}
            onClose={this.handleCloseLoginModal}
          />
        ) : (
          ""
        )}
        <SignUpModal status={this.state.statusOfSignUpModal} />
      </div>
    );
  }
}
export default App;
