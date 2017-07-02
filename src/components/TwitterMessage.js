import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  checkCharsLength = event => {
    if(this.state.message.length <= this.props.maxChars) {
      this.setState({
        message: event.target.value,
      })
    }
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.checkCharsLength} />
        <strong>{this.props.maxChars - this.state.message.length} characters remaining</strong>
      </div>
    );
  }
}

export default TwitterMessage;
