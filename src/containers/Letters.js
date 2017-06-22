import { connect } from 'react-redux';
import { tryLetter } from '../actions';
import Button from '../components/Button';
import { previousAttemptedLetters } from '../reducer';

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
