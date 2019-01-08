import React from 'react';
import { signIn } from '../dataReadingServices/authService';

class LogOnForm extends React.Component {
  state = {
    login: '',
    password: '',
  }

  handleChange = (fieldName) => (e) => {
    const value = e.target.value;
    this.setState({
      [fieldName]: value
    });
  }

  onAuthFormSubmit = (e) => {
    e.preventDefault();
    const { login, password } = this.state;
    signIn(login, password, this.props.updateAuthState);
  }

  render() {
    return (
      <form onSubmit={this.onAuthFormSubmit}>
        Login:<input onChange={this.handleChange('login')} name='login' />
        Password:<input onChange={this.handleChange('password')} name='password' />
        <input type='submit' />
      </form>
    );
  }
}

export default LogOnForm;