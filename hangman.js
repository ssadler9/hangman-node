// Make the rules of the game
// counter starting at 9
// Player will enter letters from keyboard
// letters guessed will then loop through the word generated from word.js file
// if letters have already been guessed, the user will guess again and not lose a turn
// else ...
// if letter is in word, it will display and counter will not change
// else the screen will say incorrect and the count will go down
var inquirer = require('inquirer');
var word = require('./word.js');
var count = 9;
var userGuess = [];

	var Choice = function (word) {
		if (count > 0) {
			inquirer.prompt([ {
				name: 'question',
				message: this.wordArr
				}
				]).then(function (answers, name) {
					userGuess.push(answers);
					console.log(userGuess);
					if (userGuess === word) {
						this.wordArr = userGuess;
						console.log('correct');
						console.log(count);
						Choice();
					} else {
						console.log('wrong');
						count --;
						console.log(count);
						Choice();
					}
				})
		}
}

Choice();