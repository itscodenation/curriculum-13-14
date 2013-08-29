## Lesson 1A - Introduction to HTML
**Goal:** Understand the structure of an html page

**Prerequisites:** Each student should have a text editor (e.g., Sublime Text, TextMate) and a modern web broswer (e.g., Chrome or Firefox). 

## What is a web page?

### Discuss ###
Open the discussion by asking: *What is a web page?* Give students a few minutes to describe a web page in their own words. If there is a board available, write down some of the key words students use to describe web pages. 


### Explain & Show ###
Explain that a web page is just a text file! Ask students to open a simple text editor (e.g., Notepad, TextEdit) and type a few words in a file. Then have them save the file, and open the file in the browswer. Explain:

* This is a *very very* basic web page
* It has no styling - no separation of paragraphs, colors, etc.


Open a web page, e.g., www.wikipedia.org, in their browse a web page in a new tab and "View Page Source:

* Notice the top of the page has `</!doctype html/>`
* Most modern web pages are html pages
* HTML stands for: HyperText Markup Language
* Invented in early 90s to provide a standard way to tag or "markup" a text file to get font, color, graphic, and other effects for the web
* In next few lessons, you will be coding a web page from scratch using HTML

### A website has 3 parts: ###
1. Content: the information you want to share
2. HTML: HyperText Markup Language, which gives your content structure and meaning
3. CSS: Cascading Style Sheets (we'll be talking more about this in a future lesson), which gives your content style and appereance 
In other words, HTML and CSS organize the content on your web page, and make it look good!


## Your First HTML Page ##

Let's look at creating a basic html page. There are specific rules that govern the structure of an html page. When creating an html page, you have to let the browser know that this is an html page. You do this by:

1. Saving the file with extension .html
2. Tell the browswer which version of html you're using. This is called a a doctype decleration 

Have students open a markup editor and, on the first line type:
 `<!doctype html>` Have then save the file as: hello.html. For example ope_bukola.html

 You now have a basic html page! Next, you have to signify the beginning and the end of your document. To do this:
 	<html>
 	</html>
Everything in your html page has to go between these two tags. You will be seeing tags a lot in html, so let's talk briefly abotu what they are: 
* Tags are words (tag names) surrounded by brackets, e.g., `<html>`
* Tags allow you to "markup" a web page. This lets a browswer know how to display the content
* Most tag names give you a hint as to what the tag means. For example `<p>` for paragraph, `<style>` for styling, `<ul>` for an unordered list
* Tags come in pairs, e.g., `<html>` and `</html>`
* The first tag is called the start or opening tag, and the second tag is called the end or closing tag. Almost every tag in html MUST be opened and closed. 
* A closing tag is the same as the opening tag but with a forward slash before the tag name
* Remember to open and close your tags!!

Let's go back to your page. So far, all we've done is declared the html version and told the browswer where the document starts and ends. Let's add more to it. Type:

	<!doctype html>
	<html>
	 <head>
	  <title> Hello World! </title>
	 </head>
	  <body>
	   <h1> Hello World, It's Ope</h1>
	    <p> This is my website </p>
	  </body>
	</html>

Save the page and refresh. Ask: * What content do you see on the page?* [Goal is to have students notice that only the content in the `<body>` tags appear in the main page]. Explain:

* The `<head> and </head>` tags contain the head of the document. The information here is not visible within the actual web page. The head usually includes the title of the page, and links to other files. It also includes metadata which is information about the page, for example, the language it's written in.  Notice most broswers print the title of the page on the toolbar
* All the visible content on the page is within the body tags
* The html markup itself is invisible

Now we have the basic structure of an html page!

##Exercise 1a: Start an "About.me" page
You will be creating an "About.me" profile page with information about yourself. Your completed page will include valid HTML and CSS, 1 or more images, and links to other information about you. Let's get started with the page:

* Create a directory called: about_me. We'll be storing all the files for your project in this directly
* Create a valid html page. The page title should be "About" + "Your Name." For example: "About Ope Bukola." 
* Bonus: In the head of the document, add a `<meta>` tag which lists you as the author of the page. Don't know how? Ask Google!
