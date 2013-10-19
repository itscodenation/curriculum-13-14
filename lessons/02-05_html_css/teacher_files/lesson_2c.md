Lesson 2c - CSS selectors and layouts (Cristo Rey 2013)
-------------------------------------

- **Goal:** Learn more about CSS selectors, and learn how to use CSS for layouts.
- **Prerequisites:** Basic HTML, including lists, basic CSS, JSBin.

### Do Now
1. Do attendance at http://scripted.org/attendance
2. In jsbin.com, create two lists with borders around each. (OK to search Google) [E.g. for "border property".]

### CSS Borders

Do the following in JSBin (e.g. at http://jsbin.com/uVUqima/3/edit), with students following (and free to copy to their own browser). Experiment with borders. Change colors, width, "solid" -> "dashed" -> "dotted". Settle on solid. Add "border-radius: 10px".

### Class selectors

What if I want one list with a green border, and the second list with an orange border? (Give time to realize the problem.)

So far the only selector we've learned is to specify a tag. Both of my lists use "UL" tag, so I can't distinguish them this way. Fortunately, there are more selectors.

If the selector starts with a period, it's called a _class selector_. You can pick any word you want for the class. It will apply to any HTML tag that has a `class` attribute with that value. (Remember what is an attribute in HTML? name=value, no spaces around '=', usually quotes around value.)

Try it, and have them follow along. For example, I can label the list of cities as with `class="cities"`. Then I can set a style just for cities using the CSS class selector `.cities`. I can also combine them, e.g. to say `ul.cities`: that means only apply this style to an unordered list with class "cities". In our case, it's redundant, because there is nothing else with this class anyway.

But what about the style for plain `ul`? That still applies! (E.g. specify `border` in one and `border-radius` in the other.)

What if I don't want to? I can give that list a `class` to, and make the styles more specific.



### Practice

In your lists on jsbin.com, add a class `highlight` to some of the list items. Then write CSS code to change the background of those list items to yellow.

Ask for a volunteer to showcase what they are doing on the screen. Type their JSBin.com URL with /watch at the end. We should be able to see their work on the big screen.

If you are done, check out `list-style-type` property. Try values such as `square`, `circle`, or `none`.

There is a lot to CSS, there are many selectors, lots of properties and special values. We can't learn all, nor do we need to -- we can always look things up. Hand out CSS Cheat Sheet for reference.

### ID Selector

The ID selector is similar to class. In CSS, start with `#`, e.g. `#foo`. In HTML, add `id` attribute, e.g. `id="foo"`. It works the same way as `class`, but it's used a bit differently: the ID identifies a unique element in the page, whereas you can add the same class attribute to many elements in the page.

### Layouts

Besides colors, fonts, and borders, CSS is useful for layouts, i.e. for determining where on the page different elements appear. This is how you get websites with headers across the top, and the space below is separated, for example, into menu and content side-by-side. It's done using stylesheets.

[Show] One of the simplest thing is deciding whether to align things to the left, right, or middle. The CSS property is `text-align`. Try values `center` and `right` on the `p` element.

Now, what if I wanted to place my two lists side-by-side? Here's a way. Normally a list is considered a "block element", in other words, it takes up some section of a page like a paragraph, and everything that follows it shows up below. Let's see what the browser really thinks about the shape of my list: add `border` and `background-color`, show how it takes up the whole width of the page.

I can change an element to be positioned inline using `display: inline-block` property. It would then be treated more like a word, so that multiple elements can follow one another horizontally.

In my example, at http://jsbin.com/uVUqima/3/edit, we see that sizes changed, but the element is still below the `<p>` tag. That's because the paragraph is forcing a line break. Let's remove it temporarily.

Aha! We got what we wanted: two lists side-by-side.

### DIVs

But what if I really want the list with my paragraph headings side-by-side? Could it be impossible?!

Of course not. I can make a block that contains both the paragraph and the list, and instead of positioning just the list, I can position that entire block. There is a special tag for it: `<div>`. Its purpose is to just group elements, often for layouts. Think of "div" as standing for "division". It allows you to divide up the page into logical groups.

Let's try. Enclose both lists in divs. Move the `display: inline-block` to the div.

Oh look, we got it side-by-side!

### Practice

Try to put your own lists side-by-side.

* * *
This was the end of the lesson. Plus, I mentioned homework (see below), and sent it by email the same day.
* * *


### Padding and Margin.

Our two divs are too close. CSS offers two mechanisms to deal with that:

1. `padding: 10px` adds padding inside the borders.
2. `margin: 10px` adds a margin outside the borders.

For both, there are variations such as "padding-left", "margin-top", which allow you to specify just one side of the padding or margin.

Let's try. Add a border to the div. Add padding, then margin. Settle on just `margin-right: 20px`.

A list has padding on the left without even specifying it. But we can change it. Try setting `padding: 0px` on the `ul` element.

### :hover

Let me just tell you about one more selector because it's so cool. If you add `:hover` to any other selector, then the styles you specify will only be applied when you move your mouse over that element.

E.g. it's an easy way to highlight the menu item that you are mousing over.

Let's try. Add `li:hover` with `background-color`.

### Homework

The assignment is to write the HTML and CSS to reproduce a particular look and layout: http://jsbin.com/OCaCukO/2.
There are hints to help you along. This isn't an easy project, and will likely require some research, and reading
up about css properties on your own. Use the mailing list, and use it early! The assignment is due Tuesday night.


