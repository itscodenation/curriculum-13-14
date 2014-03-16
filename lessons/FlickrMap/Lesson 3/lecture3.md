# Mashup!

So, it's pretty cool that Google and Flickr have APIs that let us use thier data to make our own maps and photo galleries. But what's even cooler is that we can make those APIs work together. We're going to build a page that maps the places where pictures were taken.

Exercise: Have students combine the code from the previous lectures onto one page. The photos will not be on the map yet, but they will have the gallery and the map on the same page.

Exercise: Have students read through some portion of the Flickr API documentation. http://www.flickr.com/services/api/flickr.photos.search.html is a good place to start. Point out the `has_geo` and `extras` arguments.

Exercise: Discuss the construction of the query URL. How would you add arguments from the documentation to your existing URL so that you can access the geographic data of images?

Exercise: Take a look at the Google Maps API documentation for making info windows: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple
Ask students to implement info windows in their existing code.

Independent Coding: At this point, the students should be able to complete the working elements of this project. The only thing they have to figure out for themselves is how to pass the data from Flickr to Google Maps within their functions.







