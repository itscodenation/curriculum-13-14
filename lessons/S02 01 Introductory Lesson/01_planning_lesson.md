###ScriptEd ~ Semester 2, Lesson 1: Planning

This semester's goal is to build your own version of the game Memory.  You may recall Memory from when you were a kid.  You get a set of upside-down squares and have to find all the paired things depicted on the squares to win, relying on your memory as you reveal different squares.

You will build your own version of Memory.  This project is inspired by a similar program completed by a ScriptEd graduate [name needed] at a recent hackathon [citation needed].  

It may not sound like a lot.  But trust us: it's a challenging program to build.  It offers some great programming and program design lessons.  

So let's begin!


#####Paper sketching (00 time estimate)

Today we'll be programming on paper, to start.

[break into teams here?]

First, list all the rules you remember about Memory, as if you were leading someone thorugh the game who has never played before.

As you work out each step, think about what you might need to program that step.  Think of things like how your player interacts with each square, what actions by your player you want to watch for, what things you might need to update to tell a player what happened, and so on.

[pause for gameplay rules and notes]


Rough list of the steps needed:

* welcome to the game
* place the squares
* track clicks on the squares
* on click, flip the square
* on second click, flip second square
* compare data on squares
* if a match
    * alert match
    * mark matched squares
    * alert about making next match
    * check how many left
* if not a match
    * alert no match
    * un-flip squares
    * alert about making next match
    * check how many left
* if none left
    * alert about winning
    * offer to start new game


[discussion about rules the group(s) came up with and any missing concerns]

Let's talk about scoring the game, if you want your game to keep score.

[discussion]

At different points you'll need to tell your players something about their game.  Can you think of a way to organize the messages you'll want to say in your User Interface idea?

Do you want to add a way to share the game with others?  If so, at what point in the game do you want to share things?


#####Wireframing (00 time estimate)

From our list, lets sketch out (in pictures or words) each step of the game.  If you realize you missed a step, add it.  

Once you have your list, perhaps try to follow its rules on a small tik-tak-toe style 2x2 game, drawn on paper.

If you discover you have new steps to add or complicated steps you could break apart, do so.

If you have repeating steps, like flipping a square, try to re-use your steps.

This exercise of sketching out each step and progression in a program is called wireframing.  It can be low-fidelity -- meaning like a rough draft, like sketches on paper -- or higher-fidelity, like rough and buggy code.  Or even a UI based on fake data, but we'll get to that.

Wireframing is an important skill for planning programs and working with teams.  It helps teams share a common vocabulary and understanding of the rules, so you can reliably describe things to each other.

Wireframing also helps you discuss and plan patterns and logic for your program, as you realize you have a repeating bunch of steps or a decision point where you might show one thing or another.

[TODO: more on the pros and cons of wireframing]

[check to see that the studends have described all the steps of the basic gameplay]

Okay, a final feature for you to think about:  What about a "I give up" button?  If someone wanted to quit your game, how would they and what would you want to show them?  

Add that to your steps and wireframe.

#####Code sketching (00 time estimate)

Now that we have a script -- the list of steps -- and wireframes to lead a player through your game, let's start thinking about the code that will run it.  

Can you describe a few functions you'll want to create for your game?

[Ask for volunteers to describe chunks of functionality]

Likely options:

* flipping cards
* checking for matches
* marking matches
* alerting if there are no matches
* etc

With either paper or your computer, describe the functions you might need.  Dont' worry about writing valid code of any kind.  Just write for your future self a note or comments about each major piece and any data you think you might need.

[pause for code sketching]

When you're done, review your script and wireframe and see if you can identify other tools you might need in your program.  Sketch those in as well.

If you wrap up all your notes and others are still working, go back thorugh your script and wireframes and consider things you might have missed or any new ideas for improvements you might make.  Or make it a bit more like code, using if-else notes and perhaps some variable names.


#####Collaboration (00 time estimate)

  - Collaborating with git (YIKES) or collaborating in some way. 
    - Dividing up functionality
    - Breaking the app into different files
    - Writing good commit messages
