Lecture notes: snake day 1
==

## Intro (before canvas task)
* brief intro to the game
 0. You control a snake with arrow keys. If anybody hasn't played before, let them know they'll get a chance in the middle of the lesson.
 0. Invented in the 70s for arcade games, ported to nokia phones in the late 90s, 
* Who knows about pixels? If nobody gets it, a picture is a 'picture element' -- draw a grid on the whiteboard to show how this works.
* If you want something to display on the screen, what are the tools you have now? The kids should have a general idea, make sure they come away with 'HTML elements' as the lowest common denominator.
* Do you know a way to draw an arbitrary shape on the screen using HTML elements? Let them think about it, but the answer is no (for the most part).
* You can do it with canvas. In this lesson we'll focus on rectangles.

## Task: canvas basics (draw_block)
Distribute the starter file (day1_begin.htm). Have them fill in the draw_block function. Don't give too many hints at first -- tell them to look at the clear() function and use google to understand how clear() works. Give 15 minutes to experiment and figure this out.

## Game state
* Everybody should try snake for a minute so they all know how it works.
* what information do you need to know to draw the game?
 0. Snake block positions
 0. Snake direction
 0. We're ignoring apples for now
* How would you represent it? (Let everyone spend a minute drawing up an object representation. If a lot of kids are perplexed by that, give them the answer then spend a lot of time making sure they understand it).

## Task: draw gamestate
Distribute the mid-class file (day1_middle.htm).
0. Copy the draw_block function from the old file
0. Each student fills in the gamestate object as they see fit
0. Fill in the body of the draw_snake function (should be simple, don't let anyone spend more than 10 minutes on this)

## Snake propagation
* Remember to uncomment the update_snake() line in onframe(). The goal here is to write a working body for the function.
* Give everyone 10 minutes to figure this out on their own. This is a difficult and interesting problem that will stretch the limits of a novice programmer's problem-solving skills. Make sure they start on paper, not on the keyboard.
* This step is an opportunity for students who usually give up early to really beat on a problem. Don't help anyone who's spent less than 5 minutes working. Ideally, they should spend a quiet hour working on this. Realistically, we don't have that kind of time. Consider assigning this as homework if your class is cool with that.
* Anyone who came up with something usable should try it. Give the rest any working algorithm (the algorithm, not the code) and have them implement it.

At this point, the snake should be crawling across the screen horizontally. Anyone who finishes early can move on to day 2.
