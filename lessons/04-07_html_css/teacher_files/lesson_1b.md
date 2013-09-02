Lesson 1B - Basic HTML tags
---------------------------

**Goal:** Understand basic html elements and tags    
**Prerequisites:** Each student should have a text editor (e.g., Sublime Text, TextMate) and a modern web broswer (e.g., Chrome or Firefox). 

### Tags

In the last section, we learned how to set up a basic html page and how to use tags. Now we're going to take a more in-depth look at tags:

* A html element has a start tag, content, and end tag
* An example of an html element: `<p>This is a paragraph</p>` In this example, the start or opening tag is `<p>`, the content is "this is a paragraph," and the end or closing tag is `</p>`
* There are also a few standalone elements like `<br />` which adds a break, and `<img />` -- these elements are said to 'self-close', which means they don't need a closing tag.

### Nesting

In html, elements can be "nested" or contained within one another. For example, you could say that you have a sandwich inside your lunchbox, which is inside your backpack. In the same way, you can have a paragraph of text inside your intro section inside the body of your page. Open your index.html file in a text editor. Notice how the different elements are nested.

* The body tag is nested within html tag
* The h1 and p tags are nested within the body

Let's add some more content, this time nested within the paragraph. After the sentence, "This is my website," type "This is an italicized word within a bold sentence". We are going to italicize the words "italicized word" and bold the entire sentence. The tag for bold is `<strong>` and italics is `<em>` which stands for emphasis. Give students a few minutes to try on their own, then ask for volunteers. Students should have:

    <!doctype html>
    <html>

      <head>
        <title>Hello World!</title>
      </head>

      <body>
        <h1>Hello World, It's Ope</h1>
        <p>This is my website. <strong>This is an <em>italicized word</em> within a bold sentence</strong>. Pretty crazy!</p>
      </body>

    </html>


Note that the `<em>` tag is nested within the `<strong>` tag which is nested within the `<p>` tag (which is nested inside the body and html tags). Let's review a few more tags.

### Headings

Have students type:

    <h1>I am a Level 1 heading</h1>
    <h2>I am a Level 2 heading</h2>
    <h3>I am a Level 3 heading</h3>
    <h4>I am a Level 4 heading</h4>

Now refresh the page, and ask students what they notice about the headings in the browser. They will probably notice that headings with larger numbers appear as larger. Although this is not necessarily true (it's hierarchy, not size), it's not worth correcting until we get to talking about css later.

### Links

Links, or hyperlinks, are one of the core elements of the internet. Links are used to connect web pages or information to one another. A link allows you to jump to a new page, or a different part of a page. Let's look at how to create links. 

Type the following:

    <p>This is a link to <a href="https://www.google.com/">Google</a>!</p>

Now let's dissect the link more:

1. Tag: `<a>` and `</a>` - the a tag, which stands for "anchor", is used to turn some text or image into a link. In the above situation, we turned the world "Google" into a link.
2. href attribute: this stands for "hyperlink reference", and tells the link where to go or its destination. In this case, the link is going to go to www.google.com.

Have students click the link to be sure it works.

You can add a some additional information to links. Let's modify our link as follows:

    <p>This is a link to <a href="https://www.google.com/" target="_blank">Google</a>!<p>

Have students type the above and click the link again to see what happens. Then explain:
* The target attribute tells the browser where to open the link, whether in the same window, or in a new window or tab.

Note that `href` and `target` are **attributes** of an html tag. This means that they are placed inside the opening tag. You can see that both attributes are placed before the end of the opening `<a>` tag. Attributes are invisible (you can't see them on the page), but are used to specify additional information about a tag. For example, a link can have a destination, a picture can have a title, etc.

For any tag, it's easy to look up what attributes can be added to it, and what those attributes mean. [Here's where you can find the attributes list for `<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes).

Ask for volunteers to turn the following text into links:
* This is a link to the front page of Google News
* This is a link to ESPN and another link to YouTube

### Lists

An unordered list, or a bulleted list, is a list of related items and is formed using a `<ul>` element. Each item in the list is marked up with a `<li>`. The reason they are called 'unordered' is that the order doesn't particularly matter for these lists, just the fact that it is a list. Let's look at an example. 

    <p>This is a list of NBA teams.</p>
    <ul>
      <li>Brooklyn Nets</li>
      <li>New York Knicks</li>
      <li>Chicago Bulls</li>
      <li>Los Angeles Lakers</li>
    </ul>

You can create lists within lists - like all other html, lists can be nested.

    <p>This is a list of cities with sports teams</p>
    <ul>
      <li>New York</li>
      <li>Dallas</li>
      <li>Atlanta</li>
    </ul>

Now we're going to add a bullet under each city that lists its basketball and football team. Do the first list (New York) and have students do the last two lists on their own.

    <p>This is a list of cities with sports teams</p>
    <ul>
      <li>
        New York
        <ul>
          <li>Knicks</li>
          <li>Giants</li>
        </ul>
      </li>
      <li>
        Dallas
        <ul>
          <li>Mavericks</li>
          <li>Cowboys</li>
        </ul>
      </li>
      <li>
        Atlanta 
        <ul>
          <li>Hawks</li>
          <li>Falcons</li>
        </ul>
      </li>
    </ul>

### Indentation

This can get pretty complicated, and they can nest really far, which gets confusing. This is why we are sure to always **indent** the code so it's easy to tell which elements are nested inside other elements. Notice how any element inside the `<ul>` is indented one level in, and any element in the `ul` that also contains other other elements has the other elements indented another level, and so on.

If you are extra sharp, you may have noticed that not all nested content is indented. Look at those `<li>`s -- the words inside them are not.

    <li>list item</li>

vs.
  
    <li>
      list item
    </li>

Totally valid concern. The convention when writing html is to indent nested content any time there is more than one element inside another element. So here, since we only have text inside the element, it doesn't need to be indented, ans is written as above. However, you'll notice that in the top level `<li>`s, there is text **and** another ul inside each li, so we indent both the text and the ul for clarity.

Making sure your html is properly indented may seem tedious at first -- html does not actually care about indentation, it's just for humans to be more clear about what's nested in what. But you will save yourself a lot of trouble and confusion down the road if you make sure that everything is indented correctly because it makes it a lot easier to read your code and track down problems.

### Exercise 1b: Modify your "About.me" page

Add some more information to your page.

* Create three sections using a first level heading. The sections should be called "History", "Hobbies & Interests", and "Education." Add a line break after each section
* In the "Hobbies & Interests" section, add two second level headings, one called "Favorite Movies" and "Favorite Places"
* In the "Favorite Movies" section, add some text, and a bulletted list of your top 5 favorite movies
* In the "Favorite Places" section, add some text, and a numbered list of your top 3 favorite places
*Bonus:  At the bottom of the page, add the text: Email me to learn more about me. Figure out how to add an email link so that when someone clicks on the sentence, it opens a link to an email program
