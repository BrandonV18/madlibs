//DojoMadLib
// Sentence Array 
var sentence = [];
//Replacements Array
var replacements = [];
// Set Index to zero
var index = 0;
alert("Welcome to the Madlib Game!");

do {
sentence[index] = prompt("Next Word")
index++;
}
while(sentence[index-1] != "^");
