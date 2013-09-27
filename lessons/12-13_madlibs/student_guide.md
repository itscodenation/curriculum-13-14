#ScriptEd - Mad Libs
####String Replacement, Alerts, and Prompts

##Introduction

Today we're going to build Mad Libs!  Mad Libs is a word game where you fill in the blanks for words in a short story.  We're going to write a program to ask the user for different types of words (verbs, nouns, numbers, colors).  Once we have their responses, we are going take a story and __replace__ the blanks with the user's responses!  

Here’s some example Mad Lib text:

```
There was an ADJECTIVE woman who lived in a/an NOUN.
She had so many PLURAL NOUN she didn`t know what to do.
She gave them some broth without any NOUN.
She VERB ENDING IN ED them all soundly and put them to bed.
```

To play the game, you ask the player for a word of each type (adjective, noun, plural noun, noun, verb ending in ed) WITHOUT telling them what the story is.  Once they’ve given you all of their answers, you replace the underlined words with whatever answers the player gave you.  Since they didn’t know anything about the story, only what kinds of words to give you, you’ll probably end up with a very silly story! 
 

##Part 1 - Alert
Start off with the file madlibs.js and create an alert that says: **Hello! Welcome to my Mad Libs game!**

An alert is a box that pops up on the screen with some text. You can create an alert by writing something like:

```
alert("Hello!")
```
but remember to repalce the text with what you want it to say.


##PART 2 - Prompting for input

Next, prompt the user to enter a word for each of the types of words in this list:

1.	A noun
2.	An adjective
3.	An adjective
4.	A noun
5.	A noun
6.	A adverb
7.	A noun
8.	A noun
9.	A color
10.	An adjective
11.	An adjective
12.	A number
13.	A adjective
14.	A plural noun
15. An adjective
16. A noun



For each word you should ask the user "Please enter " and whatever type of item you want them to enter.  So for a verb, prompt them with 

```
Please enter a verb
```

Make sure to store each of their responses into a variable! Think about what you name your variables too, you're gonna need to use them later!

__HINT:__ Remember how we prompt a user to enter some input?

Remember, a prompt is the box that pops up on the screen and asks you to enter something in the box. When someone enters a word or group of words, you can store that string in a variable.

##PART 3 - Replacing parts of a string 

Did you notice that in the `story` string that we just printed out the words in ALL CAPITAL LETTERS, like NOUN_1 and ADJECTIVE_1?  These words are placeholders.  We're going to replace those placeholder words with the words that you prompted the user for in Step 1!  To do this, we're going to use the string's replace() method.  This method looks for some text in a string, and replaces it with some other text.  So for example

```
var food = "My favorite food is ice cream!";
food = food.replace("ice cream", "broccoli");
console.log(food);
```
Would print out

```
My favorite food is broccoli!
```

Notice how we re-assigned the value of the food variable?  We do this because the replace() method doesn't change the string, but instead it returns a copy of the string "ice cream" replaced with "broccoli".  That's why we have to assign the result of the replace() method to a variable.  It doesn't have to be the same variable, we could also do

```
var food = "My favorite food is ice cream!";
var new_food = my_favorite_food.replace("ice cream", "broccoli");
console.log(new_food);
```

Which would give us the same output

```
My favorite food is broccoli!
```

But, if we didn't assign the result of the replace() method to a variable, and we printed the food variable, we wouldn't see any change.

```
var food = "My favorite food is ice cream!";
food.replace("ice cream", "broccoli");
console.log(food);
```
Would print 

```
My favorite food is ice cream!
```


__REMEMBER:__ The replace() method never changes the original string!  It always returns a new string with the replaced value.

Here's some information about the replace() method.  

__Syntax:__ 

```
string.replace(searchvalue, newvalue)
```

__Parameters:__

* searchvalue : The value to find in the string
* newvalue    : The value to replace the searchvalue with


Now that we know about the replace() method, we're ready to get started!

###Step 1

Let's start with replacing the first word we asked the user to enter, which was an adverb.  Notice on the first line of the story there's a placeholder called NOUN_1?  We're going to replace that placeholder with the adverb that we prompted the user for. 

Type the following code JUST BEFORE the place where you are printing out the story.  Replace <first_noun_var> with whatever you called the variable that you used to store the user's first response in Part 1.

```
story = story.replace("NOUN_1", <first_noun_var>);
```

Now, run your program again.  Notice anything?  The NOUN_1 in the output has been replaced with whatever value the user typed in when you asked them for an adverb!

###Step 2

Let's do the same thing for the first noun, which was the second thing we asked the user to enter.   

Notice the placeholder ADJECTIVE_1 in the story?  We're going to replace that with the noun that the user entered.  

Enter the following line of code JUST BELOW the line you entered in step 1.  Replace <first_adjective_var> with whatever you called the variable that you used to store the user's second response (a noun) in Part 1.

```
story = story.replace("ADJECTIVE_1", <first_adjective_var>);
```

Run your program again.  Now the ADJECTIVE_1 placeholder in the output has been replaced with whatever the user entered when you prompted them to enter a noun.

###Step 3
Do the same thing we just did in step 1 and 2 for each of the words you asked the user to enter back in part 1,  matching the correct placeholder value in the `story` string to the correct variable that you used in your program to store the user’s response.

When you are done, add a line at the bottom to call the `displayStory()` function to display your story in the internet browser.

```
displayStory();
```

When you see your story, you’re done!

###Bonus
Run your program again, and give some funny or silly answers to the prompts for different types of words! Can you make your own Mad Lib story and create the prompts?
