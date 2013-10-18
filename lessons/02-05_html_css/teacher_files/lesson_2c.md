Lesson 2c - CSS selectors and layouts
-------------------------------------

- **Goal:** Learn more about CSS selectors, and learn how to use CSS for layouts.
- **Prerequisites:** Basic HTML, including lists, basic CSS, JSBin.

### Do Now
1. Do attendance at http://scripted.org/attendance
2. In jsbin.com, create two lists with borders around each. (OK to search Google) [E.g. for "border property".]

### CSS Borders

Do the following in JSBin, with students following (and free to copy to their own browser). Experiment with borders. Change colors, width, "solid" -> "dashed" -> "dotted". Settle on solid. Add "border-radius: 10px".

### Class, ID selectors

What if I want one list with a green border, and the second list with an orange border? (Give time to realize the problem.)

So far the only selector we've learned is to specify a tag. Both of my lists us "UL" tag, so I can't distinguish them this way. Fortunately, there are more selectors.

If the selector starts with a period, it's called a _class_selector_. You can pick any word you want for the class. It will apply to any HTML tag that has a `class` attribute with that value.

For example, I can label different list items with `class="odd"` or `class="even"`, and then set different styles for the two classes. See http://jsbin.com/uVUqima/1/edit. On that note, here's a new CSS property: `list-style-type`, which can take values such as `disk, circle, square, none`.

There is a lot to CSS, there are many selectors, lots of properties and special values. We can't learn all, nor do we need to -- we can always look things up. Hand out CSS Cheat Sheet for reference.

### Practice

In your lists on jsbin.com, add a class called `highlight` to some of the list items. And write the CSS code to change the background of those list items to yellow.
