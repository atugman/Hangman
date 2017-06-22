import { connect } from 'react-redux';
import HangmanImage from '../components/Image';

const mapStateToProps = (state, ownProps) => ({
  level: state.failedAttempts
});

const Hangman = connect(mapStateToProps)(HangmanImage);

export default Hangman;
