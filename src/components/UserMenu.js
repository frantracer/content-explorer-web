import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { loadContentItems, unloadContentItems, loadCredentials } from '../redux/actions/actions.js';

const clientId = process.env.REACT_APP_CLIENT_ID;

const mapStateToProps = state => {
  return {
    credentials: state.auth.credentials
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadContentItems : () => { dispatch(loadContentItems()) },
    unloadContentItems : () => { dispatch(unloadContentItems()) },
    loadCredentials : (token, id) => { dispatch(loadCredentials(token, id)) }
  }
}

class UserMenu extends Component {

  constructor(props) {
    super(props);
    this.loginSuccess = this.loginSuccess.bind(this);
    this.loginFailure = this.loginFailure.bind(this);
    this.logoutSession = this.logoutSession.bind(this);
  }

  loginSuccess(response) {
    console.log("Login Success");

    console.log(response);

    const token = response.Zi.access_token;
    const id = response.googleId;
    const name = response.profileObj.givenName;

    this.props.loadCredentials({token: token, id: id, name: name});

    this.props.loadContentItems();
  }

  loginFailure(response) {
    console.log("Login Failure");
    console.log(response);
  }

  logoutSession(response) {
    console.log("Logout Success");
    this.props.unloadContentItems();
    this.props.loadCredentials({token: null, id: null, name: null});
  }

  render() {
  console.log(this.props);
    let button;
    let text = "";
    if(this.props.credentials.id === null) {
      button =
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={this.loginSuccess}
          onFailure={this.loginFailure}
          scope="https://www.googleapis.com/auth/youtube.readonly"
        />;
    } else {
      button =
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={this.logoutSession}
        />;
      text = "Welcome " + this.props.credentials.name + "!";
    }
    return (
      <div>
        {button} {text}
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
