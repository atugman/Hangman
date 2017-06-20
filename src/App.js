import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Word from './word'

class App extends Component {
  constructor() {
    super();
        // moved to reducer
    // this.state = {
    //   word: 'TUGMAN',
    //   guessedLetters: '',//guessed letters is an array of objects
    //   //class for true and false
    //   correctLetters: 'ABCD',
    //   incorrectLetters: '',
    //   class: true
    // }
    //choose random-ish word
    //render the word initially
    //style it so that text is white and

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

      handleChange(event) {
        this.setState({
          userInput: event.target.value,
          splitWord: this.state.word.split(''),
          //numberOfLetters: this.state.word.length()
          firstLetter: this.state.word[0],
          secondLetter: this.state.word[1],
          thirdLetter: this.state.word[2],
          fourthLetter: this.state.word[3],
          fifthLetter: this.state.word[4],
          sixthLetter: this.state.word[5],
          seventhLetter: this.state.word[6],
          eighthLetter: this.state.word[7],
        });
      }

      handleSubmit(event) {
      //   this.setState({
          //may not need this
        // letter1: this.state.word.split('')[0],
        // letter2: this.state.word.split('')[1],
        // letter3: this.state.word.split('')[2],
        // letter4: this.state.word.split('')[3],
        // letter5: this.state.word.split('')[4],
        // letter6: this.state.word.split('')[5],
        // letter7: this.state.word.split('')[6],
        // hey: 'it worked'
      // });
      if (this.state.word.includes(this.state.userInput)) {
        // for (var i = 0; i < this.state.splitWord; i++) {
        //   if (i = )
        // }
        // this.state.splitWord.forEach(function(letter, index){
        //   if (letter =
        // })
        // for (let i in this.state.splitWord) {
        //   console.log('here ', i); // logs "0", "1", "2", "foo"
        // }
        this.setState({
          guessedLetters: this.state.guessedLetters + this.state.userInput,
          correctLetters: this.state.correctLetters + this.state.userInput,
          userInput: ''
        })
      } else {
        this.setState({
          guessedLetters: this.state.guessedLetters + this.state.userInput,
          incorrectLetters: this.state.incorrectLetters + this.state.userInput,
          userInput: ''
        })
      }
      // else if () {
      //   this.setState({
      //
      //   })
      // }
      event.preventDefault();
    }
        //get user input from above
        //assign to variable?
        //split word
        //UPDATE STATE with the split word
        //create array of empty strings based on split word so that you have the letter count
        //UPDATE STATE with that array of empty strings
        //render the empty strings with the lines under/over them
        //loop over array containing the letters of the word
        //if userInput = word[i]
        //update state.relevantLetter with word[i]
        //else - post userinput on the side so they know what they've chosen
        //then



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <form onSubmit={this.handleSubmit}>
         <label>
           Guess a Letter:
           {/* <input type="text" value={this.state.userInput} onChange={this.handleChange} /> */}
         </label>
         <input type="submit" value="Submit" />
       </form>
       {/* <Word word={this.state.word.split('')} correctLetters={this.state.correctLetters} /> */}
         {/* <div className={this.state.class}> */}
           {/* <li>{this.state.word[0]}</li>
           <li>{this.state.word[1]}</li>
           <li>{this.state.word[2]}</li>
           <li>{this.state.word[3]}</li>
           <li>{this.state.word[4]}</li>
           <li>{this.state.word[5]}</li> */}
{/* {onSubmit={this.setState({clicked: !this.state.clicked})} */}
         </div>

    );
  }
}

export default App;
