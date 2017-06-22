import React, { Component, PropTypes } from 'react';
import '../App.css';
import { newWord } from '../actions';
import { connect } from 'react-redux';
import store from '../store'
import {words} from '../store';
import Image from '../components/Image';
import Spaces from '../components/Spaces';
import Text from '../components/Text';
import NewGameButton from '../components/Button'
import Attempts from '../containers/Attempts'
import DisplayedWord from '../containers/DisplayedWord'
import Hangman from '../containers/Hangman'
import Letters from '../containers/Letters'

class App extends Component {
  constructor() {
    super()
    this.state = {
      word: 'hey',
      guessedWord: undefined,
      attemptedLetters: [],
      failedAttempts: 0
    }
  }

  static propTypes = {
    word: PropTypes.string,
    started: PropTypes.bool,
    victory: PropTypes.bool,
    defeat: PropTypes.bool
  }

  getLetters() {
    return ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  }

  render() {
    if (this.props.started) {
      if (this.props.victory) {
        return this.renderVictory()
      } else if (this.props.defeat) {
        return this.renderDefeat()
      } else {
        return this.renderGame()
      }
    } else {
      return this.renderStart()
    }
  }

  renderStart() {
    return <p>{this.renderNewGameButton()}</p>
  }

  renderGame() {
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
        <p>{this.renderNewGameButton()}</p>
      </div>
    )
  }

  renderNewGameButton() {
    return <NewGameButton label="New Game" onClick={this.props.onNewGameClick} />
  }

  renderVictory() {
    return (
      <div>
        <p><DisplayedWord /></p>
        <p>You won!</p>
        <p>{this.renderNewGameButton()}</p>
      </div>
    )
  }

  renderDefeat() {
    return (
      <div>
        <p><Hangman /></p>
        <p>Sorry, you lost! The word was: <strong>{this.props.word}</strong></p>
        <p>{this.renderNewGameButton()}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
console.log(state);
  return {
  word: state.word,
  started: !!state.word,
  victory: state.word === state.guessedWord,
  defeat: state.failedAttempts >= 6
}
};

const mapDispatchToProps = (dispatch) => ({
  onNewGameClick: () => {
    dispatch(newWord(words[Math.floor(Math.random() * words.length)]));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
