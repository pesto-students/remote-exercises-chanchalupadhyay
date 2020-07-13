import React from "react";
// import "./App.css";
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
  handleCloseSignUpModal = () => {
    this.setState({ statusOfSignUpModal: false });
  };
  render() {
    return (
      <div >
         { this.state.statusOfSignUpModal ? <div onClick={this. handleCloseSignUpModal} className="back-drop"></div> : null }
         { this.state. statusOfLoginModal ? <div onClick={this. handleCloseLoginModal} className="back-drop"></div> : null }
         <button  className="open-modal-btn" onClick={this.handleOpenSignUpModal}>SignUp</button>
        <button className="open-modal-btn"onClick={this.handleOpenLoginModal}>Login</button>
        
        <LoginForm
          isOpen={this.state.statusOfLoginModal}
          onClose={this.handleCloseLoginModal}
        ></LoginForm>

        <SignUpForm
          isOpen={this.state.statusOfSignUpModal}
          onClose={this.handleCloseSignUpModal}
        ></SignUpForm>
      
      </div>
    );
  }
}

export default App;
