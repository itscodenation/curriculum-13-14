Lesson 1A - Introduction to HTML
--------------------------------

**Goal:** Understand the structure of an html page    
**Prerequisites:** Each student should have a text editor (e.g., Sublime Text, TextMate) and a modern web browser (e.g., Chrome or Firefox).

What is a web page?
-------------------

### Discuss

Open the discussion by asking: *What is a web page?* Give students a few minutes to describe a web page in their own words. If there is a board available, write down some of the key words students use to describe web pages. 


### Explain & Show

Explain that a web page is just a file with text in it! Ask students to open a simple text editor (e.g., Notepad, TextEdit) and type a few words in a file. Then have them save the file, and open the file in the browswer. Explain:

* This is a basic web page
* It has no styling - no colors, fonts, different size text, pictures, etc.

Open a web page \(e.g., [wikipedia.org](http://wikipedia.org)\) in their browser, right-click and select `View Page Source`:

* Notice the top of the page has `<!doctype html>`
* HTML stands for: HyperText Markup Language
* Much like how you write a sentence in English, you write a webpage in HTML
* In the next few lessons, you will be coding a web page from scratch using HTML

### A website has 3 parts: ###

1. Content: the information you want to share
2. HTML: Markup, which gives your content structure and meaning (like nouns, verbs, and adjectives in a sentence)
3. CSS: Cascading Style Sheets (we'll be talking more about this in a future lesson), which gives your content style and appereance (like making all your headlines pink)

In other words, HTML and CSS organize the content on your web page, and make it look good!

## Your First HTML Page ##

Let's look at creating a basic html page. There are specific rules that govern the structure of an html page. When creating an html page, you have to let the browser know this is an html page. You do this by:

1. Saving the file with extension `.html`
2. Telling the browser which version of html you're using. This is called a a doctype declaration

**Briefly** explain why we use text editors instead of word processors: A text editor is a computer program that allows you to edit plain text. As a web designer or developer, it's going to be the primary tool that you use to manipulate your work. This is a little bit different than a word processor, such as Microsoft Word, Apple Pages, or Google Docs. You want to avoid word processors like these when you are coding because they add lots of special formatting that you can't see when you're typing.

Have students open [a text editor](http://www.sublimetext.com/) and, on the first line type:
 `<!doctype html>` Walk the students through saving the file as hello.html in a folder called About_Me_Webpage on their USB keys.
 
You now have a basic html page! Next, you have to signify the beginning and the end of your document. To do this add this text:

		<html>
		</html>

Have the students save and open the file in their browsers. Oh no! All that typing and there's nothing on the page!
		
Everything in your html page has to go between the two `<html>` tags. You will be seeing tags a lot in html, so let's talk briefly about what they are: 

* Tags are words (tag names) surrounded by brackets, e.g., `<html>`
* Tags allow you to "mark up" a web page. Markup gives more meaning to the elements on your page. For example, if you have a headline on the page, the browser would know to make the text larger (because it's a headline) and google would know that this is an important short summary of what's to come.
* Most tag names give you a hint as to what the tag means. For example `<p>` for paragraph, `<style>` for styling with css, `<h1>` for 'headline 1' - the most important headline.
* Tags come in pairs, e.g., `<html>` and `</html>`
* The first tag is called the start or opening tag, and the second tag is called the end or closing tag. Almost every tag in html MUST be opened and closed.
* A closing tag is the same as the opening tag but with a forward slash before the tag name
* Remember to close your tags! If you do not, things will break and nobody will tell you why. A good strategy here is to make sure you type the closing tag any time you type an opening tag. That way you can never forget.

Let's go back to your page. So far, all we've done is declare the html version and tell the browser where the document starts and ends. Let's add more to it. Type:

	<!doctype html>
	<html>

		<head>
			<title>Hello World!</title>
	 	</head>

	 	<body>
			<h1>Hello World, It's Example</h1>
			<p>This is my website</p>
	 	</body>

	</html>

Save the page and refresh. Ask: *What content do you see on the page?* [Goal is to have students notice only the content in the `<body>` tags appear in the main page]. Explain:

* The `<head> and </head>` tags contain the head of the document. The information here is not visible within the actual web page. The head usually includes the title of the page, and links to other files. It also includes metadata which is information about the page, for example, the language it's written in.  You can see the title in the top toolbar of your browser.
* All the visible content on the page is within the body tags
* You can remember this by keeping in mind that while what's inside your head is important, people can't see it. However, people can always see your body.
* The html markup itself (the `<p>`s and such) are invisible

Now we have the basic structure of an html page!

### Exercise 1a: Start an "about.me" page

You will be creating an "About.me" profile page with information about yourself. Your completed page will include valid HTML and CSS, 1 or more images, and links to other information about you. Let's get started with the page:

* Create a folder called: about_me. We'll be storing all the files for your project in this folder.
* Create an html page like the one we made previously. The page title should be "About" + "Your Name." For example: "About Joe Example". You can call the file `index.html`. The page content can be whatever you want.
* Bonus: In the head of the document, add a `<meta>` tag which lists you as the author of the page. Don't know how? Ask Google!
* Bonus: Add an image of yourself to the page. Ask google for help! If you don't have an image of yourself handy, add a dinosaur instead.
