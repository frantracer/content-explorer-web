import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GoogleLogin } from 'react-google-login';
import { loadContentItems, unloadContentItems, loadCredentials, validateGoogleCode } from '../redux/actions/actions.js';

const clientId = process.env.REACT_APP_CLIENT_ID;

const mapStateToProps = state => {
  return {
    credentials: state.auth.credentials
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadContentItems: () => { dispatch(loadContentItems()) },
    unloadContentItems: () => { dispatch(unloadContentItems()) },
    validateGoogleCode: (code) => { dispatch(validateGoogleCode(code)) },
    loadCredentials: (credentials) => { dispatch(loadCredentials(credentials)) }
  }
}

class UserMenu extends Component {

  googleLoginSuccess = (response) => {
    console.log("Login Success");

    console.log(response);

    const code = response.code;

    this.props.validateGoogleCode(code);
  }

  loginFailure = (response) => {
    console.log("Login Failure");
    console.log(response);
  }

  logoutSession = (response) => {
    console.log("Logout Success");
    this.props.unloadContentItems();
    this.props.loadCredentials({ sid: null, picture_url: null, name: null });
  }

  render() {
    console.log(this.props);
    let button;
    let text;
    let image;
    if (this.props.credentials.name === null) {
      button =
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={this.googleLoginSuccess}
          onFailure={this.loginFailure}
          accessType="online"
          responseType="code"
          scope="https://www.googleapis.com/auth/youtube.readonly"
        />;
    } else {
      text = "Welcome " + this.props.credentials.name + "!";
      button = <button onClick={this.logoutSession}>Logout</button>;
      image = <img src={this.props.credentials.picture_url} alt="" width="50" height="50" align="right"></img>
    }

    return (
      <div>
        {button} {text} {image}
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
