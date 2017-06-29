import React, { PropTypes } from 'react';
import DisplayedWord from '../containers/DisplayedWord'
import Hangman from '../containers/Hangman'
import Attempts from '../containers/Attempts'
import NewGameButton from '../components/Button'
import Letters from '../containers/Letters'
import Spaces from '../components/Spaces'
import Text from '../components/Text'
import { newWord } from '../actions';
import { connect } from 'react-redux';
import {words} from '../store';
import Victory from './Victory';
import Defeat from './Defeat'


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
    if (this.props.started) {
      if (this.props.victory) {
        return <Victory label="New Game" onClick={this.props.onNewGameClick} />
      } else if (this.props.defeat) {
        return <Defeat label="New Game" onClick={this.props.onNewGameClick} />
      } else {
        return (
          //former 'Game' component
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
    } else {
      return <NewGameButton label="New Game" onClick={this.props.onNewGameClick} />
    }
  }

//   render() {
//     return (
//           <div>
//             <p><DisplayedWord /></p>
//             <p><Hangman /></p>
//             <p>Attempts: <Attempts /></p>
//             <p>
//               {
//                 this.getLetters().map((letter, index) => {
//                   return <Letters key={index} label={letter} />;
//                 })
//               }
//             </p>
//             <p><NewGameButton label="New Game" onClick={this.props.onNewGameClick} /></p>
//           </div>
//         )
//   }
  }

const mapStateToProps = (state, ownProps) => ({
  word: state.word, // Move to component
  started: !!state.word,
  victory: state.word === state.guessedWord,
  defeat: state.failedAttempts >= 6
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onNewGameClick: () => {
    dispatch(newWord(words[Math.floor(Math.random() * words.length)]));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
