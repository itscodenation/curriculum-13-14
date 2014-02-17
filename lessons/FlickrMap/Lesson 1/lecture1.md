#Put Photos on a Map with the Google Maps API and the Flickr API

Finds and plots photos based on search term within a specific geographic area. Try "zoo", "NYPD", or "Yankees". Default search term is "baseball".

Students will learn how to use APIs to build web apps. Other skills: arrays, scope, objects.

##What is an API?

First, demo the project. Let kids suggest search terms.

Go to google.maps.com. Search for various known locations (Empire State Building, your school, Yankee Stadium...) 

Go to flickr.com. Search for photos of things common to NYC (could be same searches as above).

Explanation: An API, or Application Programming Interface, is a way to access the content or data of another website. For this project, we will use the Google Maps API to make a map on the page. We will use the Flickr API to search for photos. Then we will send the photo information back to the Google Maps API to put them on the map in the right places.

##Getting Started with Google Maps

1. Need a Google account!

2. Get your API Key: https://code.google.com/apis/console

3. Google Maps API Docs: https://developers.google.com/maps/documentation/javascript/

4. Open HelloWorldMap.html

###Code Walkthrough

1. To use the Google Maps API you have to include this javascript:

```
<script type="text/javascript" 
   src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
```

2. Every location on the Earth can be represented by latitude and longitude. In this example, `var latlng` is set to the latitude and longitude of New York City.

3. Configure the map options (these are the options supported by the API: https://developers.google.com/maps/documentation/javascript/reference?csw=1#MapOptions)

  - First, we decide how far in or out we want the map to zoom when it loads. 

    - Change this number to see how that works. (Pretty sure the number can be anywhere from 1 to 14.)

  - Then we tell the API where to center the map (in this case, NYC).

  - Lastly we tell the API what kind of map we want to see. The API gives us a couple of options, but 90% of the time, just use ROADMAP.

4. We need to tell the API where on the page to put the map. In this example, a Google map is going to display in element id `map_container`.

5. Create a marker on the map, configure the display position and predefined message box when you mouse over on the marker.

6. In the final step, we call the function in the body tag so that the map will load when the page is done loading. ```<body onload="loadMap()">```

#NOTE: Do we want to pause here and discuss objects/object literal notation??


