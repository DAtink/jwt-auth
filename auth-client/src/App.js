import React, { Component } from 'react';
import './App.css';

import Content from './Components/Content';
import LogOnForm from './Components/LogOnForm';

class App extends Component {

  state = {
    isAuthDone: false
  }

  constructor(props) {
    localStorage.setItem('authToken', '');
    super(props);
  }

  hasToken = () => {
    const token = localStorage.getItem('authToken');
    console.log(JSON.stringify(token));
    return !!token;
  }

  updateAuthState = (isSuccess) => {
    this.setState({
      isAuthDone: isSuccess
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to JWT-Auth-App!
          </p>
        </header>
        <div>
          {
            this.hasToken() && this.state.isAuthDone ? <Content /> : <LogOnForm updateAuthState={this.updateAuthState} />
          }
        </div>
      </div>
    );
  }
}

export default App;
