import React, { PropTypes } from 'react';

class NewGameButton extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func
  }

  static defaultProps = {
    active: true
  }

  render() {
    return (
      <button disabled={!this.props.active} onClick={this.props.onClick}>{this.props.label}</button>
    )
  }
}

export default NewGameButton
