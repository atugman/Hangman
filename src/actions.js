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

// export const FETCH_WORD_SUCCESS = 'FETCH_WORD_SUCCESS';
// export const fetchWordSuccess = word => ({
//     type: FETCH_WORD_SUCCESS,
//     word
// });
//
// export const fetchWord = (word) => dispatch => {
//     fetch('http://www.dictionaryapi.com/api/v1/references/collegiate/xml/test?key=2fa5d14d-6c69-4651-a489-352f834a4e38').then(res => {
//         if (!res.ok) {
//             return Promise.reject(res.statusText);
//         }
//         return res.json();
//     }).then(board => {
//         dispatch(fetchWordSuccess(word));
//     });
// };
