import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import LoginForm from '../../components/LoginForm/LoginForm';
import * as Actions from '../../actions/auth';
import './Login.scss';

 class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }
  handleLoginClick(loginData) {
    this.props.login(loginData);
  }
  render() {
    return (
      <div className="login-page">
        <h2>Login</h2>
        <LoginForm onLoginClick={ loginData => this.handleLoginClick(loginData) }/>
      </div>
    )
  }
}
Login.propTypes = {
}
//Place state of redux store into props of component
function mapStateToProps(state) {
  return {
    account: state.account,
    router: state.router
  };
}
//Place action methods into props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
