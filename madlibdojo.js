//DojoMadLib
// Sentence Array 
var sentence = [];
//Replacements Array
var replacements = [];
// Set Index to zero
var index = 0;

filler(sentence,"Word:");
filler(replacements, "Replacement word:");
name(sentence,"Enter Part of speech", replacements);
name(sentence,"Enter a respective word", replacements);
// first function Chinese myArray, and myPrompt
function filler(myArray, myPrompt) {
	index = 0;
	do{
		
	myArray[index] = prompt(myPrompt +"["+index+"]");
	index++;
	}
while(myArray[index - 1]!="^");
myArray.pop();
console.log(myArray);

}
function name(myArray, myPrompt, myRepArray){
	index = 0;

for(index=0; index < myRepArray.length; index++) {
		myArray[myRepArray[index]] = prompt(myPrompt +"["+myRepArray+"]");
	
}
}