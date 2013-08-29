#ScriptEd Lesson 9: Tipping Calculator

*Goal:* Learn about variables and math in programming.

*Prerequisites:* Understand HTML IDs.

##Variables

Variables are names we assign to values. Like in math, except the value doesn't have to be a number, it can be anything.

Variables allow you to be flexible.  They are a way of storing something in the computer, much like having a bucket for putting your Lego in.  If you need to go do some chores and just drop your toys, you might not be able to find them again later – or if your parents clean up the toys might get thrown out in the course of garbage collection.   If, instead, you get a plastic bucket out and put them in there, you can rest safe in the knowledge that they’ll be there later after you finish your chores.  Variables are a bit similar.  They’re somewhere that you can put data that the program is using and label it for future reference.  Just like a bucket with the word “My Toys” on the side, you know that, assuming you put it in there earlier, your toys  will be in there next time you look.

The name you put on the outside of the bucket doesn’t really affect what you put in it.  You could have the words “toy cars” on a bucket and yet put all your trading cards in there instead.   The point is that the bucket is a safe place to keep your toys.  Variables are a safe place to keep the program’s data.

When you do something like this:

`a = 1;`

It is like putting 1 into a bucket marked a.

###Identifiers

The name you give to a value is called an identifier. For the purposes of this class, a JavaScript identifier must start with a letter, subsequent characters can be letters or numbers. No spaces are allowed. JavaScript is case sensitive, so `var my_code` is different from `var My_Code`.

To assign a value to an identifier, we use a special keyword, `var`. This means that you cannot have a variable called `var`, because JavaScript is already using it. There are some other words that you cannot use as identifiers, like 

    break
    case
    catch
    continue
    debugger
    default
    delete
    do
    else
    finally
    for
    function
    if
    in
    instanceof
    new
    return
    switch
    this
    throw
    try
    typeof
    var
    void
    while
    with

####Which of these variables have bad indentifiers?

`var 2a = 1;`

`var a b = 1;`

`var my Toys = 1;`

`var my_toys = 1;`


####Do some console.log(); exercises to show how variables store and retrieve data.

###Expressions

An expression is like an equation in math. Any piece of code that results in a value is an expression. Remember, this is not just numbers. 

These are all expressions:

`var x = 7;` 

`var x = 7 + 3;`

`var x = 2 + 2;`

`var y = x * 3;`

##Arithmetic Operators

Arithmetic operators are used to perform arithmetic between variables and/or values.

= is used to assign values.

\+ is used to add values.

\- is used to subtract values.

\* is used to multiply values.

\\ is used to divide values.

###Order of Operations

P
	Parentheses first
E
	Exponents (ie Powers and Square Roots, etc.)
MD
	Multiplication and Division (left-to-right)
AS
	Addition and Subtraction (left-to-right)

####Do some more console.log(); exercises to show how JavaScript does math and how variables can operate on other variables.

##Project Time!

Discuss how tips and tax are calculated (note that they are not calculated for the purposes of this project the same way you would in real life).

**NOT DONE YET, WILL FINISH NOTES AFTER REFACTORING CODE***
	
parseFloat: Parses a string argument and returns a floating point number.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat

.val():  Get the current value of the first element in the set of matched elements or set the value of every matched element.
http://api.jquery.com/val/
