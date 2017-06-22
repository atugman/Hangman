import React, { PropTypes } from 'react';
import Hangman from '../containers/Hangman'
import NewGameButton from '../components/Button'

class Defeat extends React.Component {
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
    <div>
      <p><Hangman /></p>
      <p>Sorry, you lost! The word was: <strong>{this.props.word}</strong></p>
      <p><NewGameButton label="New Game" onClick={this.props.onNewGameClick} /></p>
    </div>
    )
  }
}

export default Defeat
