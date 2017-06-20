export const NEW_GAME = 'NEW_GAME';
export const newWord = (word) => ({
    type: NEW_GAME,
    payload: word
});

export const TRY_LETTER = 'TRY_LETTER';
export const tryLetter = (letter) => ({
    type: TRY_LETTER,
    payload: letter
});
