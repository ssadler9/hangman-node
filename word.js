// Need to generate a word bank
// Push the word into an array
// Loop over array to generate the letters as _ spaces
// module.export Word
var fs = require('fs');
wordBank = ['par', 'birdie', 'eagle', 'bogie', 'bunker', 'fairway', 'teebox', 'rough', 'OB', 'double-eagle', 'ball', 'tee', 'knickers', 'hat'];

var TheWord = function (word) {
	this.word = wordBank[Math.floor(Math.random() * wordBank.length)];
		console.log(this.word);
	this.wordArr = [];
		this.wordArr.push(this.word);
		for (var i = 0; i < this.word.length; i++) {
				this.wordArr[i] = ' _ ';
			}
			console.log(this.wordArr);

}
TheWord();
module.exports = TheWord;

// var letterConstructor = require('./letters.js');

// var word = 'dallas';

// function WordConstructor(word) {
// 	this.word = word;
// 	this.letters = [];

// 	this.getLetters = function () {
// 		for (var i = 0; i < this.word.length; i++) {
// 			this.letters.push(new letterConstructor(this.word[i]))
// 		}
// 		return this.letters.renderLetter;
// 	}

// 	this.checkLetter = function (userGuess) {
// 		for (var i = this.letters.length - 1; i >= 0; i--) {
// 		 	this.letters[i]
// 		 	if (this.letters[i].letter = userGuess) {
// 		 		this.letters[i].show = true
// 		 	}
// 		}
// 	}

// 	this.renderWord = function () {
// 		var string = '';
// 		for (var i = 0; i < this.letters.length; i++) {
// 			string += this.letters[i].renderLetter();
// 		}
// 		return string;
// 	}

// }


