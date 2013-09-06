#ScriptEd Lesson #XX: Guess a Number

**Goal: Learn about random number generator, comparison operators, if loops, while loops.**

Today we’ll create a Number Guessing Game. Your program will ask the user to guess a
number, and then the program will respond if the number is too high, too low or just right. To do
this, you’ll learn new tools that will help you to write your program.

##If Statements

The first thing we’ll learn today is an if statement. Here’s an example:

```
var number_of_turkeys = 5;
if(number_of_turkeys > 3){
    console.log("number_of_turkeys is greater than 3");
}
```

An if statement is a CONDITION. If the condition is TRUE, then the code within the brackets will be
executed. If the statement is FALSE, the code will not be executed. Try typing and running this
code.

Now, change the number of turkeys to 2. What happens?

###Comparison Operators

Above, we used an > (‘greater than’ sign). Here are some other operators we can use:

* < Less Than
* <= Less Than or Equal To
* >= Greater Than Equal To
* > Great Than
* === Equals
* !== Does Not Equal

###Cases Matter!

Your computer program cares about case. Type the following examples into a program and run it,
and see what happens:

```
if("ABC" === "ABC"){
    console.log("HVA and HVA are equal.");
}

if("abc" === "ABC"){
    console.log("ABC and abc are equal.");
}
```

###Minty Fresh Breath (Else Statements)

If you want to execute code if your condition is not true, you can use an ‘else’ block. Type the
following code into a program. What do you think “else” does when you run the program?

```
var number_of_brushings = prompt.get_input("How many times a day do you brush your teeth?");

if(number_of_brushings < 2) {
    console.log("Have a tic tac.");
} else {
    console.log("Minty fresh!");
}
```

##Random Number Generator

We can use the Javascript Math.random() function to generate a random number. 

Math.random returns a random number between 0 (inclusive) up to but not including 1 (exclusive). 

Type and run this example:

```
 Math.random(); 
```

The result will be a number between 0 and 1, including 0 but not including 1.

Math.floor rounds a number down to the nearest whole number, or integer.

Try this example:

```
Math.floor(1.6); 
```

What is the result?

Here’s an example of generating a random number between 1 and 10:

```
var random_number = Math.floor(Math.random()*10) + 1;
console.log(random_number);
```

Could this code randomly generate the number 10? Why or why not?

Here’s an example of generating a random number between 1 and 100:

```
var random_number = Math.floor(Math.random()*100) + 1;
console.log(random_number);
```

###Your Turn

Write a program that does the following:

1. Generates a random number between 1 and 10
2. Prompts the user for his or her guess of what the number is
3. Compares the user’s guess to the randomly generated number, and prints whether the user’s
guess was correct or not.

##While Loops

Just like the if-block we learned about, the while loop has a CONDITION statement and code block. The condition is evaluated, and if the condition is TRUE, the code within the block is executed. This repeats until the condition becomes FALSE. Type the code below into a program and run it.

```
var count = 1;
while(count <= 10) {
    console.log(count);
    count++;
}
```

### Your Turn

Change the above code to only print even numbers between 0 and 10.

Hint 1: Think about what the initial value of count should be. Note - zero is an even number.

Hint 2: Think about how much you’re incrementing count each iteration of the loop.

### Break!
We can also exit the loop at any time with a BREAK statement. Type the code below and run it.

```
var count = 1;
while(count<=10){
    if(count > 5){
        break;
    }
    console.log(count);
    count++;
}
```

Now change your guessing game code to give the user 6 chances to guess the number right.

If the user guesses the right answer, print a message that the user guessed it and BREAK out of the
while loop.

If the user guesses the wrong answer, your code should still print a message saying whether the
user’s guess was too high or too low.
