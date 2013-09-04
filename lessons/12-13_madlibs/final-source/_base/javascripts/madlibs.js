

$(document).ready(function() {

	var story = "It has often been said that 'a dog is a man's best NOUN_1.' " +
	"Dogs are very ADJECTIVE_1 and can be taught many ADJECTIVE_2 tricks. " +
	"A dog can be trained to carry a/an NOUN_2 in his mouth. " + 
	"And if you throw this NOUN_3, he will run and fetch it. " + 
	"Dogs will also bark ADVERB_1 if someone tries to break into your NOUN_4 " + 
	"during the night. One of the most popular canine pets today is the NOUN_5 " +
	"Spaniel. Spaniels have curly COLOR coats and ADJECTIVE_3 ears. " +
	"They also have very ADJECTIVE_4 dispositions and live to be NUMBER years old. "+
	"Other popular dogs are ADJECTIVE_5 Terriers, German PLURAL_NOUN, and " +
	"the ADJECTIVE_6 Poodle. Every home should have a loyal dog for a/an NOUN_6.";


	console.log(story);

	var NOUN_1 = prompt("Please enter a noun");
	var ADJECTIVE_1  = prompt("Please enter an adjective");
	var ADJECTIVE_2  = prompt("Please enter an adjective");
	var NOUN_2  = prompt("Please enter a noun");
	var NOUN_3  = prompt("Please enter a noun");
	var ADVERB_1 = prompt("Please enter an adverb");
	var NOUN_4  = prompt("Please enter a noun");
	var NOUN_5  = prompt("Please enter a noun");
	var COLOR  = prompt("Please enter a color");
	var ADJECTIVE_3 = prompt("Please enter an adjective");
	var ADJECTIVE_4  = prompt("Please enter an adjective");
	var NUMBER = prompt("Please enter a number");
	var ADJECTIVE_5 = prompt("Please enter an adjective");
	var PLURAL_NOUN  = prompt("Please enter a plural noun");
	var ADJECTIVE_6 = prompt("Please enter an adjective");
	var NOUN_6 = prompt("Please enter a noun");

	story = story.replace("NOUN_1", NOUN_1);
	story = story.replace("ADJECTIVE_1", ADJECTIVE_1);
	story = story.replace("ADJECTIVE_2", ADJECTIVE_2);
	story = story.replace("NOUN_2", NOUN_2);
	story = story.replace("NOUN_3", NOUN_3);
	story = story.replace("ADVERB_1", ADVERB_1);
	story = story.replace("NOUN_4", NOUN_4);
	story = story.replace("NOUN_5", NOUN_5);
	story = story.replace("COLOR", COLOR);
	story = story.replace("ADJECTIVE_3", ADJECTIVE_3);
	story = story.replace("ADJECTIVE_4", ADJECTIVE_4);
	story = story.replace("NUMBER", NUMBER);
	story = story.replace("ADJECTIVE_5", ADJECTIVE_5);
	story = story.replace("PLURAL_NOUN", PLURAL_NOUN);
	story = story.replace("ADJECTIVE_6", ADJECTIVE_6);
	story = story.replace("NOUN_6", NOUN_6);

	//Display the final story with the replaced words by calling 
	displayStory();
	

	//Function that displays the final story in the HTML
	function displayStory(){
		$("#story").text(story);	
	}
	
});


