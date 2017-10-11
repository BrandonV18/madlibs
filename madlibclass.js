// Enter Sentence
var sentence = [];
var replacements = [];
var index = 0; //allow for incrementing in while loop

filler(sentence,"Next Word:");
filler(replacements, "Next Position:");
replace(sentence,replacements,"Part of speech for word in sentence")
alert("Switch positions");
   
   //Enter Replacements
function filler(myArray,myPrompt){
   index = -1;
 do {
	index++;
   	myArray[index] = prompt(myPrompt+"["+index+"] = "); //Where you enter number of array
  }
 while (myArray[index]!="^");
 myArray.pop(); // takes ^ away at the end
console.log(myArray); //debugging
 }
 
 function replace(mySArray, myRArray, myPrompt){ // replacing words
    for (index = 0;index < myRArray.length; index++){ // loop for words to replace 
		mySArray[myRArray[index]] = prompt(myPrompt+"["+[myRArray[index]]+"] = "); // defining words to replace
		}
   console.log(mySArray);
 }

 
