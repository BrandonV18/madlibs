// Enter Sentence
var sentence = [];
var index = 0;
do{
   	sentence[index]=prompt("Word: "+index);
	index++;
}
while (sentence[index-1]!="^");
console.log(sentence);
//Enter Replacements
var replacements = [];
var index = 0;
do{
   	replacements[index]=prompt("Position:");
	index++;
}
while (replacements[index-1]!="^");
console.log(replacements);

//Enter Part Of Speech
for (index= 0;index < replacements.length-1; index++) {
    sentence[replacements[index]] = prompt("Part Of Speech for "+sentence[replacements[index]]);
}
console.log(sentence);

// Ask for Replacement Words
 for (index= 0;index < replacements.length-1; index++) {
    sentence[replacements[index]] = prompt("Enter A "+sentence[replacements[index]]);
}
sentence.splice(-1,1);
sentenceString = sentence.join(' ');
alert(sentenceString.toString());