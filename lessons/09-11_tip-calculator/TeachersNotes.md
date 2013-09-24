#ScriptEd Lesson 9: Tipping Calculator

**Goal: Learn about variables and math in programming.**

**Prerequisites: Understand HTML IDs.**

##Variables

Variables are names we assign to values. Like in math, except the value doesn't have to be a number, it can be anything.

Variables allow you to be flexible.  They are a way of storing something in the computer, much like having a bucket for putting your Legos in.  If you need to go do some chores and just drop your toys, you might not be able to find them again later – or if your parents clean up the toys might get thrown out in the course of garbage collection.   If, instead, you get a plastic bucket out and put them in there, you can rest safe in the knowledge they’ll be there later after you finish your chores.  Variables are a bit similar.  They’re somewhere you can put data the program is using and label it for future reference.  Just like a bucket with the word “My Toys” on the side, you know that, assuming you put it in there earlier, your toys  will be in there next time you look.

The name you put on the outside of the bucket doesn’t really affect what you put in it.  You could have the words “toy cars” on a bucket and yet put all your trading cards in there instead.   The point is that the bucket is a safe place to keep your toys.  Variables are a safe place to keep the program’s data.

When you do something like this:

`a = 1;`

It is like putting 1 into a bucket marked a.

###Identifiers

The name you give to a value is called an identifier. For the purposes of this class, a JavaScript identifier must start with a letter, subsequent characters can be letters or numbers. No spaces are allowed. JavaScript is case sensitive, so `var my_code` is different from `var My_Code`.

To assign a value to an identifier, we use a special keyword, `var`. This means you cannot have a variable called `var`, because JavaScript is already using it. We use the keyword `var` to assign numbers and strings to words that represent them, such as

     var my_favorite_number = 12;
 or
 
     var my_dogs_name = "Fred";
     
The second of these assignments is called a "string" which you can use to store any collection of letters or numbers. We will cover this idea in more detail in later classes.

There are some other words that you cannot use as identifiers, like 

```
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
```

####Which of these variables have bad identifiers?

`var 2a = 1;`

`var a b = 1;`

`var my Toys = 1;`

`var my_toys = 1;`

###Expressions

An expression is like an equation in math. Any piece of code that results in a value is an expression. Remember, this is not just numbers. 

These are all expressions:

`var x = 7;` 

`var x = 7 + 3;`

`var x = 2 + 2;`

`var y = x * 3;`

##Arithmetic Operators

Arithmetic operators are used to perform arithmetic operations between variables and/or values.

= is used to assign values.

\+ is used to add values.

\- is used to subtract values.

\* is used to multiply values.

\\ is used to divide values.

###Order of Operations

**P**lease **E**xcuse **M**y **D**ear **A**unt **S**ally

Parentheses first

Exponents (ie Powers and Square Roots, etc.)

Multiplication and Division (left-to-right)

Addition and Subtraction (left-to-right)

##Activity: Let's Go Out to Eat

Erik went to Shake Shack to buy a burger. We’re going to write a program that helps us calculate how much money Erik spent on his burger.

###PART I. Erik Eats Shake Shack
1. Open CHROME and go to the URL: http://www.repl.it [Make sure it says JavaScript on the top of your screen.]

2. Type in the following code:

```
var erik_meal = "a hamburger:";
var erik_price = 4.50;
var tip_percent = 0.15;
console.log(erik_price);
```

####Think: Why did we name the variables this way? Why did we put quotations around Erik’s food?

3. Write code that prints the name of Erikʼs meal. Insert this code BEFORE the code that prints the price of Erikʼs meal.

4. Make a variable to store the tip amount. How much will the tip be if the tip is calculated at 15% (0.15)?

5. Like we just did with the tip:
	* We need a variable to hold the tax. NYC tax is 8.875%, but when you program you must write it as a decimal - 0.08875.
	* We need a variable to hold the amount of the tax. How much will the tax be?
	
6. Create a variable to calculate the total bill of Erikʼs meal. (Cost of the burger, tip amount, tax amount)

###PART II. Bill Eats Food, Too

Bill also went out to eat and had a Chicken Caesar Salad. The Caesar Salad cost 6.00 dollars. Following the example we JUST did for Erikʼs meal:

1. Create the variable and print Bill's food order

2. Create the variable and print the price of Bill's salad

3. Create the variable and print the amount of Bill's tip

4. Create the variable and print the amount of Bill's tax

5. Create the variable and print the total amount of Bill's order (price + tip + tax)

####Think: How will you name your variables? In what order will you write your code? What’s the difference between the amount of the tax/tip paid and the tax/tip percentage?

###PART III. Bill and Erik Eat Together

Erik forgot his wallet so Bill must pay for Erikʼs lunch.

1. Create the variable and print the total amount of Bill & Erikʼs food order (prices)

2. Create the variable and print the total amount of Bill & Erikʼs tax

3. Create the variable and print total amount of Bill & Erikʼs tip

4. Create the variable and print the total amount of Bill & Erikʼs order (price + tip + tax)

###PART IV. You're Hungry, Too

You decide to join Bill and Erik for lunch.

1. Select your meal from the menu at http://www.shakeshack.com/location/theater-district/

2. Create the variable and print the following values for your meal:
	* The name of your meal 
	* The price of your food 
	* The total amount for your tax 
	* The total amount for your tip 
	* The total amount you paid for your meals (price + tax + tip)
	
3. Now calculate the total for all three people (Erik, Bill & YOU)
	* The combined total for your food 
	* The combined total for your tax 
	* The combined total for your tip 
	* The combined total for your meals (price + tax + tip)
	
###PART V. Bonus

1. You have a coupon for 20% off the price of your food. Recalculate the TOTAL bills for Part I, II, III, and IV using the NEW price.

2. Even though you have a 20% off coupon, you still need to tip on the original meal prices. Recalculate the TOTAL bills for Part I, II, III, and IV using the discounted price of the food, the tip calculated on the original price, and the tax calculated on the discounted price.

3. Add a description of each item (price, tax, tip, etc) before you print that itemʼs value.

For example, instead of printing `a hamburger`

Print:

```
Erik ate a hamburger.
Bill’s tax was ______ and his tip was ______.
Bill’s total bill was _______.
```

HINT:
```
var soccer_balls = 3;
console.log(“You have ” + soccer_balls + “ balls! That’s a lot!”);
```
	
####Think: Notice the extra spaces in the code above. Why do I need those spaces? What would happen if I didn’t put them there? Can I write paragraphs?

##Before We Begin

To include large chunks of javascript in our HTML and CSS, we need to introduce a new tag into our HTML.  This is known as the `script` tag. If I have a file named "main.js" in the same directory as my HTML that I want to put into my website, I can do that by inserting the following code into my html:

    <script type="text/javascript" src="main.js"></script>

That is about all the information students should need about that for the time being.

##Project Time!

Quickly review HTML IDs. You can pretty much sweep over the jQuery and the two helper functions. Remember the goal here is to teach variable assignment and operators.

1. Write code that gets the tax percentage, tip percentage, and three meal prices from the form.

2. Write code that calculates the tax for each of the three meal prices.

3. Write code that calculates the tip for each of the three meal prices.

4. Write code that calculates the total cost for each of the three meals (price + tax + tip)

5. Write code that calculates the total cost for all three meals.

###Bonus

What if each person wants to tip a different amount?

####Just in Case
	
parseFloat: Parses a string argument and returns a floating point number.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat

.val():  Get the current value of the first element in the set of matched elements or set the value of every matched element.
http://api.jquery.com/val/
