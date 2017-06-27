import { connect } from 'react-redux';
import { tryLetter } from '../actions';
import Button from '../components/Button';

export const generateGuessedWord = (word, letters) => {
  return word.split("").map((letter) => {
    return previousAttemptedLetters(letters, letter) ? letter : "_"
  }).join("")
}

export const previousAttemptedLetters = (attemptedLetters, letter) => {
  return attemptedLetters.indexOf(letter) >= 0
}

export const isLetterPresent = (word, letter) => {
  return word.indexOf(letter) >= 0
}

const mapStateToProps = (state, ownProps) => ({
  active: !previousAttemptedLetters(state.attemptedLetters, ownProps.label)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(tryLetter(ownProps.label))
  }
})

const Letters = connect(mapStateToProps, mapDispatchToProps)(Button);

export default Letters;
