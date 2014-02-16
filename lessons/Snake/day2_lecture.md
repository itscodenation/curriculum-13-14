Lecture notes: snake day 2
==

## Review of day 1
Get them to talk about:
 0. What's stored in gamestate
 0. How is the snake position updated

## The switch statement
Do a show of hands and Q&A to make sure everyone understands how to use the switch statement. If not, take 15 minutes to explain it. (Make sure to cover case, default, and do an example with missing break).

## Key input
* Have everyone copy and paste the key input skeleton into their projects (day2_skeleton.htm)
* Run the file and have them hit keys and watch the console input. Have everyone create cases for down, left and right which log the name of the direction. (Up is already in there).
* Have everyone modify their switch cases to modify gamestate.direction. This may take some experimentation for them to get right.
* In theory you shouldn't be able to 'reverse' (i.e. go from up to down or left to right). In real snake, you can only turn 90 degrees at once. If anyone finishes early, they can work on that.

## Hit-testing (walls)
* Write a block_in_range(x,y) function that tests whether the block is on the game field.
* Q&A for the students: do we need to test every block or one specific block? (Answer: just the last).
* Add logic to the onframe function to set gamestate.failed=true when block_in_range fails.

## Failure case
* Modify the onframe() function so if gamestate.failed is set, it does something different (different background color, maybe).

## Apple generator
* Take 5 minutes for everyone to write on paper how the apples will be stored in gamestate. (Answer: same format as the snake blocks).
* Write a function make_apples(n) that generates n apples in random positions on the game field.
* This gets called once when the page is loaded. Let the students figure out how to make that happen.
* Write a function draw_apples() that goes in onframe and draws the apples on the game canvas.
* Anyone who finishes early can move on to the day 3 work.