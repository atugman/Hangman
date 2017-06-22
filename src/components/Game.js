import React, { PropTypes } from 'react';
import DisplayedWord from '../containers/DisplayedWord'
import Hangman from '../containers/Hangman'
import Attempts from '../containers/Attempts'
import NewGameButton from '../components/Button'
import Letters from '../containers/Letters'

class Game extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func
  }

  static defaultProps = {
    active: true
  }

  getLetters() {
    return ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  }

  render() {
    return (
          <div>
            <p><DisplayedWord /></p>
            <p><Hangman /></p>
            <p>Attempts: <Attempts /></p>
            <p>
              {
                this.getLetters().map((letter, index) => {
                  return <Letters key={index} label={letter} />;
                })
              }
            </p>
            <p><NewGameButton label="New Game" onClick={this.props.onNewGameClick} /></p>
          </div>
        )
  }
}

export default Game
