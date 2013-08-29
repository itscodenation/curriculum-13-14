var prompt = require("./get_input.js");
var Sync = require("sync");
Sync(function() {
	var full_name = prompt.get_input("What is your full name?");
	
	//#1 - Greeting
	console.log("Nice to meet you, " + full_name);
	
	//#2 - Length of their name
	var length = full_name.length;
	console.log("Your name has " + length + " characters");
	
	//#3 - The first character of their name
	var first_character = full_name.charAt(0);
	console.log("The first letter of your name is " + first_character);
	
	//#4 - The last character of their name
	var last_character = full_name.charAt(full_name.length-1);
	console.log("The last letter of your name is " + last_character);
	
	

	//#5 - Third character from the end of their name
    var third_from_last_character = full_name.charAt(full_name.length-3);
    console.log("The third from last character of your name is " + third_from_last_character);
	  
	//#6 - Just their first name
	var index_of_space = full_name.indexOf(" ");
	var first_name = full_name.substring(0, index_of_space);
	console.log("Your first name is " + first_name);
	
	//#7 - Just their last name
	var index_of_first_letter_in_last_name = index_of_space+1;
	var last_name = full_name.substring(index_of_first_letter_in_last_name, full_name.length);
	console.log("Your last name is " + last_name);
	
	
	//#8 - Izzle!
	var first_name_without_last_2_characters = first_name.substr(0, first_name.length-2);
	var first_name_with_izzle = first_name_without_last_2_characters + "izzle";
	console.log("Sup, " + first_name_with_izzle + "!");	
});