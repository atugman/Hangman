import React, { PropTypes } from 'react';

class Spaces extends React.Component {
  static propTypes = {
    text: PropTypes.string
  }

  spacedText() {
    return this.props.text.split('').join(" \u00a0 ")
  }

  render() {
    return (
      <span>{this.spacedText()}</span>
    )
  }
}

export default Spaces
