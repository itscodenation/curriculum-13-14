# Teacher's Notes

## Magic 8-Ball

A fun introduction to arrays and random number generation through creating an online Magic 8-ball.

![image](http://www.redkid.net/generator/8ball/yoursign.jpg)

## What's Covered

* Math functions
* Array declaration
* Choosing a random value from an array
* Replacing/updating content in the DOM
* Some light interaction

## Topics for Further Discussion

* Alternate ways of returning random responses
* Smarter, less random questions and answers
* Visual effects like shaking the 8 ball, answer displaying through a triangle (like the real thing!)



#ScriptEd Lesson #16-17: Magic 8-Ball
**Reminder:** Have students log their attendance at scripted.org/attendance
**Goal: Learn about arrays and their uses in programming

The goal of todays lesson is to create a magic 8-ball program. To do this, we will use the javascript type called the array. Also, we will use a random number generator like we covered in the previous lesson.

##Array's

The first thing we'll need for today's class is the array type. Array's are lists of other types of elements in javascript. They are basically a row of shoe boxes that we can put whatever we'd like inside. Here are some examples:

```
var some_even_numbers = [0,2,4,6,8];
console.log(numbers_less_than_five[0]); >>> 0
console.log(numbers_less_than_five[1]); >>> 2
console.log(numbers_less_than_five[2]); >>> 4
console.log(numbers_less_than_five[4]); >>> 8
```

As you see, we create arrays using the [] notation, and can access elements of the array by typing in array_name[n] where n is a number. One of the more tricky parts of arrays is that they start counting their elements at zero instead of one, as you can see in the example. This will probably take some time getting used to. Another important thing to realize is that arrays are ordered. For instance:

```
if ([1,2] === [2,1]) {
  console.log("array's aren't ordered");
} else {
  console.log("array's are ordered");
}
>>> "array's aren't ordered"
```

###Random numbers as discussed in last class

Let's talk for a second about the random numbers that we generated in last class.
Now that we have a way to store lists of elements, we can use random numbers to
grab arbitrary elements out of the array. For instance, how could we make a robot
that has a different favorite color each time we turn it on:

```
function getRobotsFavoriteColor() {
    var robots_colors = ['red', 'blue', 'green', 'yellow'];
    var random_number = Math.floor(Math.random() * 4);
    return 'I am a robot and my favorite color is ' + robots_colors[random_number];
}
```

##Getting elements from the DOM
Now we are going to learn how to use Javascript to manipulate elements inside of the DOM.
Say for insance that my HTML contained an element

```
<div id="random_number"></div>
```

and I wanted to change my webpage so that this element actually contained a random number between one and ten every time I loaded the page.  To do this, I could write the following Javascript:

```
var div_element = document.getElementById("random_number");
div_element.textContent = Math.floor(Math.random() * 10);
```

document.getElementById is a function that goes out into our HTML looking for the element with the id that we pass into the function as a string. We then assign it to the variable div_element. We can update this div's text by changing it's textContent property. We do this here, assigning a random number between one and ten to it.

##Light Interaction

Finally, we need to cover how to make functions activate when people do things on our web page. Javascript is an event-driven language, which means that it makes it pretty easy for us to teach Javascript how to react once certain events happen on a webpage (such as clicking or scrolling or entering text). For this specific assignment, we are just interested in when someone clicks a button. We can attach events to button clicks in the following manner:

```
<button id="click-me"></button>
```

```
function excitedFunction() {
  alert("Woohoo! I'm a button and somebody clicked on meeee!");
}
var button = document.getElementById("click-me");
button.addEventListener("click", excitedFunction);
```

Here the first section is our HTML and the second is our Javascript. Notice two important things. First, that I had to use the document.getElementById method to go out and find our HTML element and assign it to a variable. After I found our HTML element, I then used a function that it always comes with called "addEventListener" to attach an event to it. This function always expects its first parameter to be the type of event, and its second parameter to be the function that should fire when the event happens. If you're interested in all the other cool events you can bind to functions, you could always go look around on the internet for other fun ones (mousehover is one of my favorites).

###Your Turn

Write a program that does the following:

1. Collect a list of some fortunes a magic 8-ball would give.
2. Have users click on a button and then randomly give them one of the fortunes from your list.
