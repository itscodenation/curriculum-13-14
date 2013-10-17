Lesson 2b - More on HTML and CSS
--------------------------------

- **Goal:** Review HTML, including nesting, learn more tags, more CSS, and how to tie HTML and CSS together.
- **Prerequisites:** One HTML lesson, one CSS lesson, browser, JSBin.

### Do Now
1. Do attendance at http://scripted.org/attendance
2. In jsbin.com, create sentence "Hello, ScriptEd!", with "ScriptEd" a link to http://scripted.org.
3. Make the link open in a new window (search google if unsure).

### Homework review

You were asked to do two things for homework: a lesson on codecademy.com, and add lists to your About-Me page.

Firstly, I want to apologize that codecademy lesson was so long. If you worked through the entire thing, you must have learned a lot.

1. Raise your hand if you completed that whole lesson.
2. Raise your hand if you did part of it.
3. Raise your hand if you did none of it.
4. Raise your hand if you added some lists to your About-Me page.
5. Raise your hand if you didn't realize there was homework.

Going forward, we will have homework on Friday every week. It will be hands-on: to practice the material we learn in class. This class goes fast, so it is very important that you do the homework. We'll assign it on Friday, and you'll have to submit it by Tuesday night. We will review each person's homework on Wednesday, and then we address on Thursday any difficulties you may have had.


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

### Sharing code

Last time we used JSFiddle to experiment with code. JSBin is another similar site, and I like it a bit better, so we'll use that one. We will eventually come back to editing files in an editor, and learn how programmers share code in the real world, but for now, JSBin will make our lives easier.

Please visit http://jsbin.com/scripted-cr1/4/quiet. You'll see a spreadsheet. Click "Edit" next to your name, and fill in the JSBin Link with the URL of the JSBin from your Do-Now. We'll continue working in the same JSBin today.

### Using JSBin

JSBin has some nice features. Firstly, it automatically shows your changes as you type. Secondly, it tells you whether you made a mistake and where. Try a few mistakes right now:

1. Open a `<p>` tag, but close `</q>` tag. You'll see that the mismatched tag turns red.
2. Try deleting the closing `</head>` tag. JSBin highlights `</html>` in red, because you haven't closed the inner tag, and closing the outer one.

### HTML nesting

An important aspect of HTML is that it you can nest tags. E.g. it's normal to have nested tags like `html->body->p->a`, and it's common to have much deeper structures. When nesting multiple levels, you should format your code to make it easier to read. For that we use indentation, i.e. add spaces at the start of the lines. E.g. (demonstrate on screen: http://jsbin.com/EsIkiMA/1/edit):

    <html>
      <body>
        <p>
          Hello world <a ...>...</a>.
        </p>
      </body>
    </html>
   
The opening and closing tags have the same offset (or indentation), and everything inside them is indented further.

The browser doesn't care about spaces. So why does indentation matter? (Humans care, and when programming, remember, your code is as important for humans to understand, as for computers.)

You can indent code by placing the cursor in the beginning of the line and adding (or deleting) spaces or tabs. JSBin makes indenting even easier: use Ctrl+[ and Ctrl+], and you don't even have to move the cursor. Try it now.

### More HTML tags

How do you make a bulleted list? There is a tag `<ul>` (for "unordered list"). A numbered list is enclosed in tags `<ol>` instead (for "ordered list"). In either case, each list item is enclosed in `<li>` tags (for "list item").

For example (open in jsbin: http://jsbin.com/alALito/1/edit ):

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

On the JSBin page, create your own lists of 3-4 items, one numbered and one bulleted. List your favorite actors, sports teams, colors, planets, whatever.

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

### Practice

On the JSBin page, add styles to list items (`li` selector) to make them blue.

### More CSS

Let's learn another CSS selector and property. If the selector starts with a period, it's a class selector. You can pick any word you want for the class. It will apply to any HTML tag that has a `class` attribute with that value.

For example, I can label different list items with `class="odd"` or `class="even"`, and then set different styles for the two classes. See http://jsbin.com/uVUqima/1/edit. On that note, here's a new CSS property: `list-style-type`, which can take values such as `disk, circle, square, none`.

There is a lot to CSS, there are many selectors, lots of properties and special values. We can't learn all, nor do we need to -- we can always look things up. Hand out CSS Cheat Sheet for reference.

### Practice

In your lists on jsbin.com, add a class called `highlight` to some of the list items. And write the CSS code to change the background of those list items to yellow.

### Linking HTML and CSS.

Copy and paste your JSBin URL into a new tab, and replace the last word "edit" with "quiet". You'll see just your page with no extras.

Now right-click on the page to get a menu, and select "View Source". You should see the source code of this page.  You edited HTML and CSS separately, but now you see both included in a single listing. Can someone explain how that CSS is inserted into the HTML page? (Inside `<script>` tags).

This is one way of including CSS into a page. For larger websites, a better way is using a `<link>` tag. We'll cover it later.
