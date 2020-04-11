import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GoogleLogin } from 'react-google-login';
import { loadContentItems, unloadContentItems, loadCredentials, validateGoogleCode, logout } from '../redux/actions/actions.js';

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
    validateGoogleCode : (code) => { dispatch(validateGoogleCode(code)) },
    logout : () => { dispatch(logout()) },
    loadCredentials : (credentials) => { dispatch(loadCredentials(credentials)) }
  }
}

class UserMenu extends Component {

  componentDidMount() {
    this.props.validateGoogleCode(null);
  }

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
    this.props.logout();
  }

  render() {
    console.log(this.props);
    let button;
    let text;
    let image;
    if(this.props.credentials.name === null) {
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
      text = <div className="profile-text">{"Logged as " + this.props.credentials.name + "!"}</div>
      button = <div><button className="btn-default" onClick={this.logoutSession}>Logout</button></div>
      image = <div className="profile-image"><img src={this.props.credentials.picture_url} alt="" /></div>
    }

    return (
      <div>
        <nav class="nav-menu">
          <ul>
            <li>
              <a href="#contentmarks">Contentmarks</a>
            </li>
            <li>
              <a href="#subscriptions">Subscriptions</a>
            </li>
            <li>
              <a href="#people">People</a>
            </li>
          </ul>
          <ul>
            <li>
              {text}
            </li>
            <li>
              {image}
            </li>
            <li>
              {button}
            </li>
          </ul>
        </nav>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
