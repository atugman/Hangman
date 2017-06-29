import { NEW_GAME, TRY_LETTER } from './actions';
// import generateGuessedWord from './containers/Letters';
// import previousAttemptedLetters from './containers/Letters';
// import isLetterPresent from './containers/Letters';

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

const initialState = {
  word: '',
  guessedWord: '',
  guessedLetters: [],
  correctLetters: [],
  incorrectLetters: [],
  failedAttempts: 0,
  words: ['daisy']
}

export default (state, action) => {
  state = state || initialState;
  if (action.type === NEW_GAME) {
    const newWord = action.payload;
    const newAttemptedLetters = [];
    return {
      word: newWord,
      guessedWord: generateGuessedWord(newWord, newAttemptedLetters),
      attemptedLetters: newAttemptedLetters,
      failedAttempts: 0
    }
    return state;
  }
  else if (action.type === TRY_LETTER) {
    const newLetter = action.payload;
    if (previousAttemptedLetters(state.attemptedLetters, newLetter)) {
      return state;
    } else {
      const newAttemptedLetters = [...state.attemptedLetters, newLetter];
      const newFailedAttempts = isLetterPresent(state.word, newLetter) ? state.failedAttempts : state.failedAttempts + 1;
      const newGuessedWord = generateGuessedWord(state.word, newAttemptedLetters);
      return {
        ...state,
        attemptedLetters: newAttemptedLetters,
        guessedWord: newGuessedWord,
        failedAttempts: newFailedAttempts
      }
    } return state;
  } else {
    return state;
  }
}
