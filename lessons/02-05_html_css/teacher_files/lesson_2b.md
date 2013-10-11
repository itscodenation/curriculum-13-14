Lesson 2b - More on HTML and CSS
--------------------------------

- **Goal:** Review HTML, including nesting, learn more tags, more CSS, and how to tie HTML and CSS together.
- **Prerequisites:** One HTML lesson, one CSS lesson, text editor, browser.

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
    
Inside each `<li>` tag, you can nest anything, e.g. another list. That's how you would do sublists.

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

### More CSS

Let's learn another CSS selector and property. If the selector starts with a period, it's a class selector. You can pick any word you want for the class. It will apply to any HTML tag that has a `class` attribute with that value.

For example, I can label different list items with `class="odd"` or `class="even"`, and then set different styles for the two classes. See http://jsfiddle.net/AYM58/1/. On that note, here's a new CSS property: `list-style-type`, which can take values such as `disk, circle, square, none`.



There is a lot to CSS, there are many selectors, lots of properties and special values. We can't learn all, nor do we need to -- we can always look things up. Hand out CSS Cheat Sheet for reference.

### Practice

In your lists on jsfiddle.net, add a class called `highlight` to some of the list items. And write the CSS code to change the background of those list items to yellow.

### Linking HTML to CSS

We've been applying styles to HTML on jsfiddle. It's time to do it for our own pages.

Here's a new self-closing tag: `<link rel="stylesheet" href="style.css" />`. It goes in the `<head>` of an HTML document, and says to apply the given CSS file to this document.

### Practice

In your Documents folder, create a subfolder called `Lesson4`. Open your editor (SublimeText), and create two empty files. Save both in the `Lesson4` folder as `mypage.html` and `mystyle.css`.

Copy and paste your html from jsfiddle into `mypage.html`, an the CSS into `mystyle.css`. Add `<html>` &amp; co. tags, and add an appropriate `<link>` tag to tie the two files together.

Be sure to save to your network folder.

### Assignment

Create an `About me` page with three sections: your hobbies, your classes, and your favorite anything (e.g. books). Create a CSS file, and tie it to this page using `<link>`. Add styles to make it look as nice as you can. Consider fonts, backgrounds, borders. Read up on `font-family`.

- Bonus 1: set up an image as a background for your page.
- Bonus 2: read up on CSS layout, and make your three lists show up side-by-side using CSS.

