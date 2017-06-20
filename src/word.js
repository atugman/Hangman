import React from 'react';

import Letter1 from './letter1'

export default function Word(props) {
  const letters = props.word
  const correctLetters = props.correctLetters

  console.log(props);
  console.log(props.word);
  console.log(props.word[0])

  console.log('letters ', letters);

  return (
    <div>
      <ul><Letter1 letters={props} /></ul>
    </div>
  )
}

/* function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
); */
