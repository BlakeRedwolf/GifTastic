# HW #6 - {GifTastic}
Using the GIPHY API to make a dynamic web page that populates with gifs by making a call to the GIPHY API and using JavaScript and jQuery to change the HTML of this site.

## Live Link (If relevant)
 - https://blakeredwolf.github.io/GifTastic/

## Description on how to use the app
 - Add a topic related to Dogs in the input.
 - Click Search and 10 gifs will appear.
 - Click on any gif to start animating it!
## Requirements
#### Add a simple description of what the HW requirements were

1. Create an array of strings, each one related to a topic of your choice. Save it to a variable called topics.
2. Your app should take the topics in this array and create buttons in your HTML.
   Try using a loop that appends a button for each string in the array.
3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
5. Under every gif, display its rating (PG, G, so on).
   This data is provided by the GIPHY API.
   Only once you get images displaying with button presses should you move on to the next step.
6. Add a form to your page takes the value from a user input box and adds it into your topics      array. 
   Then make a function call that takes each topic in the array remakes the buttons on the page.

## Technologies Used
#### Use bullets to list out the technologies used. For example,
- HTML
- CSS
- Bootstrap
- Javascript
- Jquery for Dom Manipulation
- AJAX for API GET requests

## Code Explaination
- Started by cloning then initializing the project file from Git.
- Created basic html, css, and bootstrap assets.
- Javascript:
1. Set my initial array, and set a variable for the limit of 10.
2. Dynamically created buttons using function createButtons() and emptied #buttons content.
3. Created a for loop, to create a button for each parameter in the topics array.
4. Added class attributes of of button btn btn-lg to b.
5. Appended b. to #buttons.
6. Called createButtons()
7. Call to api with data from button, emptied content in #gifs.
8. Made a ajax function using the GET method.
9. Used a for loop to input gifs, and made a div, a img, and a p element to hold my content.
10. Added attributes to p, div, img, and appended p, img to the div, and #gifs to the div.
11. addButton() function, then pushed my input val() to topics, and createButtons().
12. Finally created on click functions for animate and still states of my gifs.

-------------