Lesson 2 - Introduction to CSS
--------------------------------

**Goal:** Understand the role of CSS and how to make simple changes to pre-existing CSS files.
**Prerequisites:** Each student should have a text editor (e.g., Sublime Text, TextMate), a modern web browser (e.g., Chrome or Firefox), and introductory understanding of HTML.

What is CSS?
-------------------

### Explain & Show ###
Explain CSS stands for **Cascading Style Sheets**.  CSS provides the formatting and style for a webpage, while HTML provides the content of the webpage.  Give some examples of what CSS might be used to style (e.g., font-size, background-color, element position, etc.).  
### Exercise ###
Have the students visit [CSS Zen Garden](http://csszengarden.com/) and look around to see what CSS can do.

* Ask if they notice anything similar between the different designs.  Ask if they notice anything different.
* Make sure they recognize every design of the page has the same content (HTML), but the look and feel of each site varies drastically due to the styling provided by CSS.

## How is CSS added to HTML? ##
Mention there are multiple ways to include CSS in HTML, but we'll be following one particular approach throughout our curriculum: **external style sheets**.  This just means we'll be writing our CSS in a separate file and then including it in our HTML later on.

* Have students open css_lesson_1.html in their browsers and text editors.  At this point the page will have no CSS.
* The students may or may not have already learned comments from their preceding HTML lessons.  Ask students how to write comments in HTML and if they are unaware, then briefly review them.  
* Ask the students to uncomment the line in css_lesson_1.html that includes the CSS, save it, and then refresh it in their browsers.  Ask them what changed and encourage the students to guess why.

## CSS Syntax ##
Now we'll dig into the actual syntax of CSS.  Open up that style.css file.

Break down a CSS rule into its components.  Be sure to cover these topics and provide examples:
* Selectors
* Declarations (Property-Value pairs)
* Syntax rules like opening and closing curly braces, colons between properies and values,  and separating declarations with semi-colons

### Selectors ###
Show how to target elements by:
* element type (div, p, img, etc.)
* class (.className)
* id (#idName)

The students may have already learned what classes and ids are, but you should ask them to explain them and what each is used for.

Lead them through some CSS changes on a projector and ask what they think will happen before reloading the page.  Make some mistakes as you go to make sure the students recognize the importance of getting the syntax correct and what behavior to expect when they don't.  You can also ask what you ought to change to make something occur ("What would you guess I should change to make the background pink?").  Feel free to use sites like jsfiddle.net to present your examples.

### Pseudo Selectors ###
Briefly mention that we've only shown the very basics of CSS and that it's possibly to do much more with it.  For example, you can target elements based on certain user actions (show :hover) or on an element's position in the html (p .childId).  Consider showing some live examples on the projector.

### Rule Precedence ###
If multiple rules apply to an element and they set the same property to different values, what is the resulting value?  The short answer is the more specific rules take precedence over the less specific.  This isn't a topic that needs to be discussed, but be aware of this in case a student asks.

## Applying What We've Learned ##
### Resources ###
Make sure the students have this (CSS Cheat Sheet)[http://www.pxleyes.com/blog/wp-content/uploads/2010/03/css-cheatsheet.pdf] available to help them along while they work on the subsequent exercises.  Also, encourage them to try using Google if they have any questions, or they can always ask a volunteer for help.

### Exercise ###
Have students change the appearance of the css_lesson_1.html in the browser by changing style.css.  They should make the following changes:
* Make the fox gif smaller
* Change the background and font color of "Greetings, human! I am robot text"
* Change the link so it goes to your favorite site (besides ScriptEd.org)
* Bonus: Change the fox image to another image
* Bonus: Create an image that links to another site when clicked

### Exercise ###
Create a CSS file and and include it in your "About.me" page.  Now style your "About.me" page by altering your CSS file!  As the teacher you may want to announce this exercise at the same time you announce the previous exercise.  Tell the students once they complete the previous exercise they should move on to this one.
