###ScriptEd ~ Semester 2, Lesson 1: Planning

The goal this semester is to build your own version of the game Memory.  You may recall Memory from when you were a kid.  You get a set of upside-down squares and have to find all the paired things depicted on the squares to win, relying on your memory as you reveal different squares.

You will build your own version of Memory.  This project is inspired by a similar program completed by a ScriptEd graduate [name needed] at a recent hackathon [citation needed].  

It may not sound like much.  But it's a challenging program to build.  It offers some great programming and sofware design lessons.

#####Paper sketching (00 time estimate)

To start, we'll be programming on paper.

First, list all the rules you remember about Memory, as if you were leading someone thorugh the game who has never played before.


As you work out each step, think about what you might need to program that step.  Think of things like how your player interacts with each square, what actions by your player you want to watch for, what things you might need to update to tell a player what happened, and so on.

[pause for gameplay rules and notes]

Let's see what consensus we have around the steps.  Please form small teams and compare your steps, consolidating them into one master list that you all agree works best.

[pause for group filtering]

Now let's see what our groups have in common for the rules of the game.  Who wants to describe their first step?

[Walk through the game step-by-step as the students came up with them.  Teachers, note if they missed any in the list below and judge if you should discuss those steps.]

* welcome / rules
* place the squares
* track clicks on the squares
* on click, flip the target square
* on second click, flip the second target square
* compare revealed squares
* if a match
    * alert match
    * mark matched squares
    * check how many left
    * alert about making next match
* if not a match
    * alert no match
    * un-flip squares
    * check how many left
    * alert about making next match
* if none left
    * alert about winning
    * offer to start new game

[if the students missed a step or need to break steps apart, guide them through that discussion.]

Within your groups, decide if you want to keep score and if so, how.

[discussion time]

Here are a few other game-design concerns to discuss:

At different points you'll need to tell a player information about his or her game.  Can you think of a way to organize the messages you'll want to communicate?

[discussion time]

Do you want to add a way to share the game with others?  If so, at what point in the game do you want to share things?

[discussion time]


#####Wireframing (00 time estimate)

[back as individuals]

From your group's list, try to roughly sketch what you want to see for each step of the game.  As you work, if you realize you missed a step, add it in.

[time for sketching]  

Once you have your list and sketches, perhaps try to follow its rules on a small tik-tak-toe style 2x2 game, on paper.

If you discover you have new steps to add or that you need to break apart complicated steps, go ahead and do that.

If you have repeating steps, like flipping a square, try to re-use your steps.

[more sketching time]


This exercise of sketching out each step and progression in a program is called wireframing.  Wireframing is often low-fidelity -- meaning rough draft, sketch-like work on paper or a whiteboard -- or higher-fidelity, like cobbling together rough code.  Sometimes it even means creating a whole UI based on fake data.  But we're starting today with low-fidelity wireframing.

Wireframing is an important skill for planning programs and working with teams.  It helps teams develop a common vocabulary and understanding of the rules, so you can reliably describe things to each other as you build your game.  It gives teams a point of reference to use if you have to circle back to earlier concepts and ideas.

Wireframing also helps you plan for patterns and logic for your program, like where you realize you have a repeating bunch of steps or a decision point where you might show one option or another.

[check to see that the students have described all the steps of the basic gameplay]

Okay, a final feature for you to think about:  What about a "I quit" button?  If someone wanted to quit your game, how would they and what would you want to show them?  

Add that to your steps and wireframe.

[wireframing time for a quit button]


#####Code sketching (00 time estimate)

Now that we have a script -- the list of steps -- and wireframes to lead a player through your game, let's start thinking about the code that will run it.  

Can you describe a few functions you'll want to create for your game?

[ask for volunteers to describe chunks of functionality]

Likely options:

* flipping cards
* checking for matches
* marking matches
* alerting if there are no matches
* etc


With either paper or your computer, describe the functions you might need.  Don't worry about writing valid code of any kind.  Just write for your future self.  Write a note or comments about each major piece and any data you think you might need.

[pause for code sketching]

When you're done, review your script and wireframe and see if you can identify other bits you might need in your program, like your 'quit' button or a 'you win' message.  Sketch those in as well, in pseudo-code.

If you wrap up all your notes and others are still working, go back thorugh your script and wireframes and consider things you might have missed or any new ideas for improvements you might make.  Or make it a bit more like code, using if-else notes and perhaps some variable names.

_TODO in code sketching, from our curriculum planning notes:
* Dividing up functionality
* Breaking the app into different files_


#####Collaboration (00 time estimate)

[optional?]

Over the last few lessons you each drew up your own script and wireframes for the Memory game you're going to build.  And you broke into teams to collaborate on one script, then we back to making it your own again.  That's a lot of changes.  What if you wanted to go back to a previous version, like your script before you worked in groups?  Or what if you wanted to take someone else's script which you find more interesting and elaborate on that?  

With paper prototyping and planning, you may or may not have copies of your past work to refer to.  When you get into code, you can't 'undo' futher back than your last save.  Well, not without help.  There are a whole host of software solutions to help you keep track of your code history.  They're often called version control or source control.  

The current popular source control software is called git.  In fact ScriptEd uses it for these lessons and materials, as well as the code samples.  We track changes, move backward and forward in the change history and leave a record of the reasons for the changes, for ourselves and teammates.

Git and other version control programs have a few core abilities that are helpful to understand:

* commit -- you commit your code to a repository, along with a message about what you changed and why
* pull -- you pull in changes made by others, so your work is up-to-date with the Latest version
* push -- you push your changes up to the main collection, so others can get and see your work

There is a LOT more to git and version control but this is the heart of it.  You may be familiar with it working in Google Docs, where you can see the document revision history and even step back in time to see who made what changes

[perhaps a quick demo?]


_TODO in collaboration:
* Writing good commit messages_
