import React, { PropTypes } from 'react';
import {newWord} from '../actions'
import {words} from '../store'
import { connect } from 'react-redux';

class NewGameButton extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.props.dispatch(fetchWord());
  // }
  // generateGuessedWord = (word, letters) => {
  //   return word.split("").map((letter) => {
  //     return previousAttemptedLetters(letters, letter) ? letter : "_"
  //   }).join("")
  // }
  //
  // previousAttemptedLetters = (attemptedLetters, letter) => {
  //   return attemptedLetters.indexOf(letter) >= 0
  // }
  //
  // isLetterPresent = (word, letter) => {
  //   return word.indexOf(letter) >= 0
  // }

  // static propTypes = {
  //   label: PropTypes.string,
  //   active: PropTypes.bool,
  //   onClick: PropTypes.func
  // }

  static defaultProps = {
    active: true
  }

  render() {
    return (
      <button disabled={!this.props.active} onClick={this.props.onNewGameClick}>{this.props.label}</button>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
  word: state.word,
  words: state.words,
  started: !!state.word,
  victory: state.word === state.guessedWord,
  defeat: state.failedAttempts >= 6
}
};

const mapDispatchToProps = (dispatch, props) => ({
  onNewGameClick: () => {
    dispatch(newWord(words[Math.floor(Math.random() * words.length)]));
    console.log('hey ', props);
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewGameButton)
