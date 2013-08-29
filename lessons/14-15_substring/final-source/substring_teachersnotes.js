var prompt = require("./get_input.js");
var Sync = require("sync");
Sync(function() {
	var full_name = prompt.get_input("What is your full name?");
	
	//Print the following
	
	//#1 - Greeting
	console.log("Nice to meet you, " + full_name);
	
	//#2 - Length of their name
	  /*
	    We can find out the length by using the 'length' property.  
	  */
	var length = full_name.length;
	console.log("Your name has " + length + " characters");
	
	//#3 - The first character of their name
	  /*  
	  	We can use the charAt method here.  The charAt method takes the index 
	  	(or position) of the character we want to extract.  Indexes are 0 based, meaning 
	  	the first character is at index 0, the second is at index 1, and so on.  
	  	So for example, for the string "SCRIPTED"...
	  	
	  	Character   S   C   R   I   P   T   E   D
	  	Index       0   1   2   3   4   5   6   7
	  */
	var first_character = full_name.charAt(0);
	console.log("The first letter of your name is " + first_character);
	
	//#4 - The last character of their name
	  /*  
	    We'll use charAt again, but this time we have to do some math.  We don't know 
	    when we're writing our program how many characters will be in the name the user
	    enters.  But we can find out by using the length property!
	   
	    If we had the string "SCRIPTED", it's length is 8.  What's the index of it's last
	    character (D)?  Remember, indexes start at 0!   
	    
	    Character   S   C   R   I   P   T   E   D
	  	Index       0   1   2   3   4   5   6   7
	  	
	  	The last index is 7.  Notice anything?  7 is 8 (the length of the string) minus 1!
	  	This makes sense, since the first character (character number 1) is at index 0.
	  	(which is 1 - 1 )
	  	
	  	So, we can subtract 1 from the length to find the index of the last character!:
	  	(Length of Name)-1 = Last Letter of name.
      */
	  
	var last_character = full_name.charAt(full_name.length-1);
	console.log("The last letter of your name is " + last_character);
	
	

	//#5 - Third character from the end of their name
	  /*
	    We can use this same technique as we used to find the last character of their name
	    to find the character that is any number from the end of the string.  
	    
	    For example, to find the index of the 3rd character from the 
	  	end of "SCRIPTED", we would subtract 3 from the length.
	  */
	  var third_from_last_character = full_name.charAt(full_name.length-3);
	  console.log("The third from last character of your name is " + third_from_last_character);
	  
	//#6 - Just their first name
		/* 
		  To do this, we find the position of the space character.  We know this separates
		  their first name from their last name.  
		*/
	var index_of_space = full_name.indexOf(" ");
		
		/* 
		  Their first name will be from index 0 (the first letter) to 1 before index of the space 
		
		  The substr function is better for this, since it takes an end index as it's second 
		  parameter.  
		
		  We don't have the subtract one from index_of_space because the substring function
		  doesn't include the character at the end index.  
		
		  We say that substring works from start_index (inclusive) to end_index (exclusive)
		*/
	var first_name = full_name.substring(0, index_of_space);
	console.log("Your first name is " + first_name);
	
	//#7 - Just their last name
	   /*
	     This time, rather than starting at the first character in their name (index 0), 
	     we'll start from the index of the first character of their last name.  How do we
	     find out what that index is?
	
	     We already know the index of the space that separates their first and last name
	     (we already got it, and put it in the index_of_space variable that we already 
	     created).  Their last name starts one character  after this space.  
	     So the index of the first character in their last name is index_of_space+1
	     
	     We can use the substring method again.  Since we want to start at the index of
	     the first letter in the last name, and continue until the end of the string, we 
	     can use full_name.length as the second (end index) parameter to the substring 
	     method.  Why? The end_index you pass to substring is EXCLUSIVE.  This means the 
	     substring method does not include the character that is at the end_index position.
	     The last character the substring method will return is the character that is one 
	     before the end_index.
	     
	     If the end_index wasn't exclusive, then this would actually cause an error, since
	     the character at full_name.length doesn't exist!  Remember, indexes are 0 based,
	     so a string with length 4 has indexes 0,1,2,3.  There isn't anything at index 4!
      */   
	var index_of_first_letter_in_last_name = index_of_space+1;
	var last_name = full_name.substring(index_of_first_letter_in_last_name, full_name.length);
	console.log("Your last name is " + last_name);
	
	
	//#8 - Izzle!
	/* 
		We need to remove the last two characters in the first name, and replace them with
		"izzle".
		
		We've already got the first name in the first_name variable, so let's use it again!
		
		We'll do this in 2 steps
		1) Remove the last two characters from first_name
		2) Add "izzle" to the end
		
        We can use the substr method to get (or extract, in computer programming terms)
        everything except the last two characters of the first name.
		
		Remember the substr method takes two arguments
		1) start_index :  The index of the first character to extract
		2) char_count   :  The total number number of characters to extract
		
		So this method extracts char_count characters starting with with the character at
		start_index.
		
		What should we use for char_count.  We'll we want the number of characters in the
		first name, minus 2 (since we're removing the last 2 characters from the end).  We
		know the number of characters in the first name is first_name.length, so we can 
		just subtract two from this!
		
		
	*/
	/* First we get the name without the last two characters */
	var first_name_without_last_2_characters = first_name.substr(0, first_name.length-2);

	/** Now we just add the "izzle" to the substring we just extracted */
	var first_name_with_izzle = first_name_without_last_2_characters + "izzle";
	console.log("Sup, " + first_name_with_izzle + "!");	
});