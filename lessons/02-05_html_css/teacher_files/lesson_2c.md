Lesson 2c - CSS selectors and layouts
-------------------------------------

- **Goal:** Learn more about CSS selectors, and learn how to use CSS for layouts.
- **Prerequisites:** Basic HTML, including lists, basic CSS, JSBin.

### Do Now
1. Do attendance at http://scripted.org/attendance
2. In jsbin.com, create two lists with borders around each. (OK to search Google) [E.g. for "border property".]

### CSS Borders

Do the following in JSBin (e.g. at http://jsbin.com/uVUqima/3/edit), with students following (and free to copy to their own browser). Experiment with borders. Change colors, width, "solid" -> "dashed" -> "dotted". Settle on solid. Add "border-radius: 10px".

### Class, ID selectors

What if I want one list with a green border, and the second list with an orange border? (Give time to realize the problem.)

So far the only selector we've learned is to specify a tag. Both of my lists us "UL" tag, so I can't distinguish them this way. Fortunately, there are more selectors.

If the selector starts with a period, it's called a _class selector_. You can pick any word you want for the class. It will apply to any HTML tag that has a `class` attribute with that value. (Remember what is an attribute in HTML? name=value, no spaces around '=', usually quotes around value.)

Try it, and have them follow along. For example, I can label the list of cities as with `class="cities"`. Then I can set a style just for cities using the CSS class selector `.cities`. I can also combine them, e.g. to say `ul.cities`: that means only apply this style to an unordered list with class "cities". In our case, it's redundant, because there is nothing else with this class anyway.

But what about the style for plain `ul`? That still applies! (E.g. specify `border` in one and `border-radius` in the other.)

What if I don't want to? I can give that list a `class` to, and make the styles more specific.

### Practice

In your lists on jsbin.com, add a class `highlight` to some of the list items. Then write CSS code to change the background of those list items to yellow.

Ask for a volunteer to showcase what they are doing on the screen. Type their JSBin.com URL with /watch at the end. We should be able to see their work on the big screen.

If you are done, check out `list-style-type` property. Try values such as `square`, `circle`, or `none`.

There is a lot to CSS, there are many selectors, lots of properties and special values. We can't learn all, nor do we need to -- we can always look things up. Hand out CSS Cheat Sheet for reference.

### Layouts

Besides colors, fonts, and borders, CSS is useful for layouts, i.e. for determining where on the page different elements appear. This is how you get websites with headers across the top, and the space below is separated, for example, into menu and content side-by-side. It's done using stylesheets.

[Show] One of the simplest thing is deciding whether to align things to the left, right, or middle. The CSS property is `text-align`. Try values `center` and `right` on the `p` element.

Now, what if I wanted to place my two lists side-by-side? Here's a way. Normally a list is considered a "block element", in other words, it takes up some section of a page like a paragraph, and everything that follows it shows up below. Let's see what the browser really thinks about the shape of my list: add `border` and `background-color`, show how it takes up the whole width of the page.

I can change an element to be positioned inline using `display: inline-block` property. It would then be treated more like a word, so that multiple elements can follow one another horizontally.

In my example, at http://jsbin.com/uVUqima/3/edit, we see that sizes changed, but the element is still below the `<p>` tag. That's because the paragraph is forcing a line break. Let's remove it temporarily.

Aha! We got what we wanted: two lists side-by-side.

### DIVs

But what if I really want the list with my paragraph headings side-by-side? Could it be impossible?!

Of course not.
