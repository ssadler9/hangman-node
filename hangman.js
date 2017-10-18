// Make the rules of the game
// counter starting at 9
// Player will enter letters from keyboard
// letters guessed will then loop through the word generated from word.js file
// if letters have already been guessed, the user will guess again and not lose a turn
// else ...
// if letter is in word, it will display and counter will not change
// else the screen will say incorrect and the count will go down
var inquirer = require('inquirer');
var TheWord = require('./word.js');
var count = 9;
var userGuess = [];
var correctGuess = [];
var word = new TheWord;
console.log(word);
 
	var Choice = function (word) {
		console.log(word);
		if (count > 0) {
			inquirer.prompt([ {
				name: 'question',
				message: word.spaces
				}
				]).then(function (answers, name) {
					// console.log(answers.question);
					userGuess.push(answers.question);
					var letterGuessed = answers.question
					// console.log(letterGuessed);
					// console.log(word.wordArr);
// seems like there should be a foreach loop on question to get each new letter from userGuess

					// correctGuess.push(letterGuessed);
					// console.log(correctGuess);
					if (word.word.indexOf(letterGuessed) !== -1) {
						console.log("it's in here");
						
						for (var i = 0; i < word.word.length; i++) {
							// word.spaces[i] = letterGuessed;
							word.spaces.push(letterGuessed);
						}

						console.log(word);
						 Choice(word);

					} else {
						console.log('wrong');
						count --;
						// console.log(count);
						console.log(word);
						Choice(word);
						return;
					} 
				}) 
			
		}
	};

Choice(word);