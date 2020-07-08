import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    showSignUpModal: false,
    showLoginModal: false,
  };

  openSignUpModal = () => {
    console.log("signUp");
    this.setState({ showSignUpModal: true });
  };
  openLoginModal = () => {
    console.log("Login");

    this.setState({ showSignUpModal: true });
  };
  render() {
    return (
      <div>
        <button onClick={this.openSignUpModal}>SignUp</button>
        <button onClick={this.openLoginModal}>Login</button>
      </div>
    );
  }
}
export default App;
