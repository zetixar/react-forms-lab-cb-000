import React from 'react';
import PropTypes from 'prop-types';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  //for using multiple targets
  //handleUser(field, event){
  // this.setState({ [field]: event.target.value })
  handleUserNameChange = event => {
    this.setState({
      username: event.target.value
    })
  }
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmitForm = event => {
    event.preventDefault();
    const {username, password} = this.state;

    if (username || password) {
      return;
    }
    this.props.onSubmit({
      username,
      password
    })
  }

  //instead of line 53 we can also do onChange={this.handleUser.bind(this, 'username')} to have mutli fields use the same method
  render() {
    return (
      <form onSubmit={this.handleSubmitForm} >
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleUserNameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handlePasswordChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
