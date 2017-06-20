import React from 'react';

export default function Letter1(props) {
  console.log('letter1 ', props);
  //const letter1 = props.letters.word[4]
  const correctLetters = props.correctLetters

  return (
    <div>
      {/* <ul><Letter1 letters={props} /></ul> */}
    </div>
  )
}
//
//
//   function DisplayLetter() {
//     if (correctLetters.includes(props.word[4])) {
//       return <Letter1 />;
//     }
//   }
// }
