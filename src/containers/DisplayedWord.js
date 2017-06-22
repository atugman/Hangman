import { connect } from 'react-redux';
import Spaces from '../components/Spaces';

const mapStateToProps = (state, ownProps) => ({
  text: state.guessedWord
});

const DisplayedWord = connect(mapStateToProps)(Spaces);

export default DisplayedWord;
