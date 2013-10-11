Lesson 2b - More on HTML and CSS
--------------------------------

**Goal:** Review HTML, including nesting, learn more tags, more CSS, and how to tie HTML and CSS together.
**Prerequisites:** One HTML lesson, one CSS lesson, text editor, browser.

### Do Now
1. Do attendance at http://scripted.org/attendance
2. In jsfiddle.net create a sentence "Hello, ScriptEd!", with "ScriptEd" a link to http://scripted.org.
3. Make the link open in a new window (search google if unsure).


### HTML Review

Let's recall what we know about HTML.
* What does "HTML" stand for?
* What is its purpose? (Structure and content, not the looks of the page.)
* Syntax: angle brackets, opening-closing or self-closing tags.
* Syntax: content vs attributes.
* Examples:

   Tag | Meaning
   -------------------------|----------------
   `<html>, <head>, <body>` | basic structure
    `<p>` | paragraph
    `<a src="URL">` | link
    `<img src="URL" />` | image - self-closing tag.

* A link has two parts, the shown part, and the address to take you to. Who can explain which part goes where?

### HTML nesting

An important aspect of HTML is that it you can nest tags. E.g. it's normal to have nested tags like `html->body->p->a`, and it's common to have much deeper structures. When nesting multiple levels, you should format your code to make it easier to read. For that we use indentation, i.e. add spaces at the start of the lines. E.g.

    <html>
      <body>
        <p>
          Hello world <a ...>...</a>.
        </p>
      </body>
    </html>
   
The opening and closing tags have the same offset (or indentation), and everything inside them is indented further.

The browser doesn't care about spaces. So why does indentation matter? (Humans care, and when programming, remember, your code is as important for humans to understand, as for computers.)

### More HTML tags

Let's learn some more tags.

To make a bulleted list, there is a tag `<ul>` (for "unordered list"). A numbered list is enclosed in tags `<ol>` instead (for "ordered list"). In either case, each list item is enclosed in `<li>` tags (for "list item").

For example (open in jsfiddle: http://jsfiddle.net/AYM58/ ):

    <p>Some colors:</p>
    <ul>
      <li>Red</li>
      <li>Blue</li>
      <li>Green</li>
    </ul>
    
    <p>Biggest cities</p>
    <ol>
      <li>New York</li>
      <li>Los Angeles</li>
      <li>Chicago</li>
    </ol>

### Practice

On jsfiddle.net, create your own lists of 3-4 items, one numbered and one bulleted. List your favorite actors, sports teams, colors, planets, whatever.

### CSS Review

Let's recall what we know about CSS:
* What does "CSS" stand for?
* What is its purpose? (Look and feel, colors, fonts, layouts.)
* Syntax: `SELECTOR { PROPERTY: VALUE; }`
  * Where on the keyboard are the curly braces?
  * Why do we indent properties inside the curly braces? (Same as for html: easier to read.)
  * In multi-word properties, words are separated with dashes.
* What are some selectors we've used? Tags like `body`, `h1`; but there are others.
* What are some properties we've used?
  * `color`
  * `background-color`
  * `font-size`
  * `font-weight`



### Explain & Show ###
Explain CSS stands for **Cascading Style Sheets**.  CSS provides the formatting and style for a webpage, while HTML provides the content of the webpage.  Give some examples of what CSS might be used to style (e.g., font-size, background-color, element position, etc.).  
### Exercise ###


## How is CSS added to HTML? ##
Mention there are multiple ways to include CSS in HTML, but we'll be following one particular approach throughout our curriculum: **external style sheets**.  This just means we'll be writing our CSS in a separate file and then including it in our HTML later on.

* Have students download css_lesson_1.html and style.css.   They can download the file at [scripted.org/lessons.html](http://www.scripted.org/lessons.html). They should open the files in their text editors, and should open the HTML file in their browsers. At this point the page will have no CSS.
* The students may or may not have already learned comments from their preceding HTML lessons.  Ask students how to write comments in HTML and if they are unaware, then briefly review them.  
* Ask the students to uncomment the line in css_lesson_1.html that includes the CSS link, save it, and then refresh it in their browsers.  Ask them what changed and encourage the students to guess why.
* Speak to students about how file is linked from one place to another.

## CSS Syntax ##
Now we'll dig into the actual syntax of CSS.  

Break down a CSS rule into its components.  Be sure to cover these topics and provide examples:
* Selectors
* Declarations (Property-Value pairs)
* Syntax rules like opening and closing curly braces, colons between properies and values,  and separating declarations with semi-colons

### Selectors ###
Show how to target elements by:
* element type (div, p, img, etc.)
* class (.className)
* id (#idName)

Note to instructor: It might be a good idea to write these down in advance of the class (element, class and ID).

Discuss with students: classes and ids are, but you should ask them to explain them and what each is used for.

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
