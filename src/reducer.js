import { NEW_GAME, TRY_LETTER } from './actions';

const generateGuessedWord = (word, letters) => {
  return word.split("").map((letter) => {
    return previousAttemptedLetters(letters, letter) ? letter : "_"
  }).join("")
}

const previousAttemptedLetters = (attemptedLetters, letter) => {
  return attemptedLetters.indexOf(letter) >= 0
}

const isLetterPresentAtWord = (word, letter) => {
  return word.indexOf(letter) >= 0
}

const initialState = {
  word: '',
  guessedWord: '',
  guessedLetters: [],
  correctLetters: [],
  incorrectLetters: [],
  failedAttempts: 0
}

export default (state, action) => {
  state = state || initialState;
  if (action.type === NEW_GAME) {
    const newWord = action.payload;
    const
    state = Object.assign({
    }, initialState, {
      word: action.payload,//random word from API
      guessedWord: '',
       //
    })
    return state;
  }
  else if (action.type === TRY_LETTER) {
    //
    return state;
  }
  return state;
}
