// Need to generate a word bank
// Push the word into an array
// Loop over array to generate the letters as _ spaces
// module.export Word
// var fs = require('fs');
var wordBank = ['par', 'birdie', 'eagle', 'bogie', 'bunker', 'fairway', 'teebox', 'rough', 'oo', 'ball', 'tee', 'knickers', 'hat'];

var TheWord = function (word) {
	this.word = wordBank[Math.floor(Math.random() * wordBank.length)];
		// console.log(this.word);

	this.wordArr = [];
		this.wordArr.push(this.word);
		console.log(this.wordArr);
		var array = this.wordArr
	this.spaces = array;
	console.log(this.spaces);

		for (var i = 0; i < this.word.length; i++) {
				this.spaces[i] = ' _ ';
			}
			// console.log(this.wordArr);

}
// TheWord();
module.exports = TheWord;

