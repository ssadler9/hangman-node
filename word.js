// Need to generate a word bank
// Push the word into an array
// Loop over array to generate the letters as _ spaces
// module.export Word
// var fs = require('fs');
var letter = require('./letters');

var TheWord = function (word) {
	this.word = word;
	this.wordArr = [];
	this.found = false;

	this.getLetter = function(){
		for (var i = 0; i < this.word.length; i++) {
				var newLetter = new letter(this.word[i]);
				this.wordArr.push(newLetter);
			}

	}

	this.checkLetter = function(userInput){
		var matched = 0;
		for (var i = 0; i < this.wordArr.length; i++) {
			if (this.wordArr[i].character === userInput){
				this.wordArr[i].appear = true;
				matched++;
			}
		}
		return matched;
	}

	this.checkWin = function(){
		var isWin = false;
		var lettersFound = 0;
		for (var i = 0; i < this.wordArr.length; i++) {
			if (this.wordArr[i].appear) {
				lettersFound++;
			}
		}
		if (lettersFound === this.wordArr.length){
			isWin = true;
		}
		return isWin;
	}

	this.wordRender = function (){
		var string = '';
		for (var i = 0; i < this.wordArr.length; i++) {
			string += this.wordArr[i].letterRender();
		}
		return string;
	}
}
// TheWord();
module.exports = TheWord;

 