import React, { PropTypes } from 'react';
import DisplayedWord from '../containers/DisplayedWord'
import NewGameButton from '../components/Button'
import { newWord } from '../actions';
import words from '../store';
import { connect } from 'react-redux';
import {generateGuessedWord} from '../reducer'
import onNewGameClick from '../containers/App'

class Victory extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func
  }

  static defaultProps = {
    active: true
  }

  render() {
    console.log(this.props.onNewGameClick);
    return (
      <div>
        <p><DisplayedWord /></p>
        <p>You won!</p>
        <p><NewGameButton label="New Game" onClick={this.props.onNewGameClick} /></p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  word: state.word,
  started: !!state.word,
  victory: state.word === state.guessedWord,
  defeat: state.failedAttempts >= 6
}
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onNewGameClick: () => {
    dispatch(newWord(words[Math.floor(Math.random() * words.length)]));
  }
})

export default connect(mapStateToProps)(Victory);
