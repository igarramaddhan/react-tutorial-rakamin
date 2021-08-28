import React from 'react';
import './LoginPage.css';

class LoginPage extends React.Component {
  state = {username: '', password: ''};

  onUsernameChange = (event) => {
    this.setState({username: event.target.value});
  };

  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  };

  onSubmit = () => {
    const {username, password} = this.state;
    console.log('>>', {username, password});
  };

  render() {
    return (
      <div className="Container">
        <input
          style={{
            background: 'green',
          }}
          onChange={this.onUsernameChange}
        />
        <input type="password" onChange={this.onPasswordChange} />
        <button onClick={this.onSubmit}>Log In</button>
      </div>
    );
  }
}

export default LoginPage;
