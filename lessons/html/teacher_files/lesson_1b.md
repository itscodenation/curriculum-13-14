## Lesson 1B - Basic HTML tags
**Goal:** Understand basic html elements and tags

**Prerequisites:** Each student should have a text editor (e.g., Sublime Text, TextMate) and a modern web broswer (e.g., Chrome or Firefox). 

## Tags 
In the last section, we learned how to set up a basic html page and how to use tags. We're going to take a more in-depth look at tags:
* An html element has a start tag, content, and end tag
* An example of an html element: `<p>This is a paragraph</p>` In this example, the start or opening tag is `<p>`, the content is "this is a paragraph," and the end or closing tag is `</p>`
* There are also a few standalone elements like `<br />` which adds a break, and `<img />` 


## Nesting
In html, all elements are "nested" or contained within one another. Open your index.html file in a text editor. Notice that the different elements are nested. 
* Body tag is nested within html tag
* h1 and p tags are nested within the body 

Let's add other tags, this time nested within the paragraph. After the sentence, "This is my website," type "This is an italicized word within a bold sentence". We are going to italicize the word "This" and bold the entire sentence. The tag for bold is `<strong>` and italics is `<em>` which stands for emphasis. Give students a few minutes to try on their own, then ask for volunteers. Students should have:

	<!doctype html>
	<html>
	 <head>
	  <title> Hello World! </title>
	 </head>
	  <body>
	   <h1> Hello World, It's Ope</h1>
	    <p> This is my website. <strong> <em>This</em> is an italicized word within a bold sentence </strong> </p>
	  </body>
	</html>


Notice that the `<em>` tag is nested within the `<strong>` tag which is nested within the `<p>` tag. Let's review a few more tags. 

## Heading

Have students type:


	<h1>I am a Level 1 heading</h1>
	<h2>I am a Level 2 heading</h2>
	<h3>I am a Level 3 heading</h3>
	<h4>I am a Level 4 heading</h4>

Ask students what they notice about the headings in the broswer. Headings emphasize hierarcy, NOT size. Even though `<h1>` is visually larger than `<h2>`, it's meant to denote a larger organization hierarchy. 


## Links

Links, or hyperlinks, are one of the core elements of the internet. Links are used to connect web pages or information to one another. A link allows you to jump to a new page, or a different part of a page. Let's look at how to create links. 

Type:

	This is a link to <a href="https://www.google.com/"> Google's Homepage </a>


Let's dissect the link more
1. Tag: `<a>` and `</a>` - the a tag, which stands for anchor, is used to turn some text or image into a link. in the above, we turned the world "Google" into a link
2. href attribute: this stands for hyperlink reference, and tells the link where to go or its destination. In this case, the link is going to go to www.google.com 

Have students click the link to be sure it works. 

You can add a lot of additional information to links. Let's modify our link as follows:

	This is a link to <a href="https://www.google.com/" alt="Google's homepage" target="_blank"> Google </a>

Have students type the above and click the link again to see what happens. Then explain:
* The alt attribute specifies alternate text. If for some reason, the browser can't render the link, it will render the alternative text
* The target attribute tells the browser where to open the link, whether in the same window, or in a new window or tab

Ask for volunteers to turn the following into links:
* This is a link to the front page of Google News
* This is a link to ESPN and another link to YouTube


## Lists
An unordered list, or a bulleted list, is a list of related items and is formed using a `<ul>` element. Each item in the list is marked up with a `<li>`. Let's look at an example. 

	This is a list of NBA teams. 
	<ul>
		<li> Brooklyn Nets</li>
		<li> New York Knicks</li>
		<li> Chicago Bulls </li>
		<li> Los Angeles Lakers </li>
	</ul>

You can create lists within list. 

	This is a list of cities with sports teams
	<ul>
		<li> New York</li>
		<li> Dallas </li>
		<li> Atlanta </li>
	</ul>

Now we're going to add a bullet under each city that lists its basketball and football team. Do the first list (New York) and have students do the last two lists on their own

	This is a list of cities with sports teams
		<ul>
			<li> New York
				<ul>
					<li>Knicks</li>
					<li>Giants</li>
				</ul>
			</li>
			<li> Dallas 
				<li>Mavericks</li>
				<li>Cowboys</li>
			</li>
			<li> Atlanta 
				<li>Hawks</li>
				<li>Falcons</li>
			</li>
		</ul>


##Exercise 1b: Modify your "About.me" page
Add some more information to your page.

* Create three sections using a first level heading. The sections should be called "History", "Hobbies & Interests", and "Education." Add a line break after each section
* In the "Hobbies & Interests" section, add two second level headings, one called "Favorite Movies" and "Favorite Places"
* In the "Favorite Movies" section, add some text, and a bulletted list of your top 5 favorite movies
* In the "Favorite Places" section, add some text, and a numbered list of your top 3 favorite places
*Bonus:  At the bottom of the page, add the text: Email me to learn more about me. Figure out how to add an email link so that when someone clicks on the sentence, it opens a link to an email program
