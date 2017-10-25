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

var userGuess = [];
var correctGuess = [];


var game = { 
	wordBank: ['par', 'birdie', 'eagle', 'bogie', 'bunker', 'fairway', 'teebox', 'rough', 'ob', 'ball', 'tee', 'knickers', 'hat'],
	currentWord: null,
	count: 9,
	startGame: function (word){
		this.randomWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)]
		this.currentWord = new TheWord(this.randomWord);
		this.currentWord.getLetter();
		this.promptUser();
	},

	promptUser: function() {
		var self = this;
		inquirer.prompt([ {
			name:'question',
			message: self.currentWord.wordRender()
		}
		]).then(function (result){
			// console.log(error, result);

			var lettersFound = self.currentWord.checkLetter(result.question);
			if (lettersFound === 0){
				console.log('wrong');
				self.count--;
				if (self.count === 0) {
					console.log('Game Over');
					console.log('The word was: ' + self.randomWord);
				} else {
					console.log(self.count);
					self.promptUser();
				}
			} else {
				console.log('Correct!');
				if (self.currentWord.checkWin()){
					console.log('You Win!');
				} else {
					console.log(self.count);
					self.promptUser();
				}
			}
		})
	}
	
};

game.startGame();
