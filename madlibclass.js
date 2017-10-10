// Enter Sentence
var sentence = [];
var replacements = [];
var index = -1; //allow for incrementing in while loop
filler(sentence,"Next Word:");
filler(replacements, "Next Position:");
   
   //Enter Replacements
function filler(myArray,myPrompt){
   index = -1;
 do {
	index++;
   	myArray[index] = prompt(myPrompt +index+ ":");
  }
 while (myArray[index]!="^");
console.log(myArray); //debugging
 }
 