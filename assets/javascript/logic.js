$(document).ready();
// Initial array
var dogs = ["German Shepard", "Pug", "Husky"];

// Display function to re-render the HTML to display the appropriate content

function addButton(){
  var targetButton = $('#data-input').val();
  //alert(targetButton);
  // Append btn-view div with text entered button:
  
  $("#btn-view").append('<button type="button" class="btn btn-default" onclick="displayMyData(\''+targetButton+'\')">'+targetButton+'</button>');
  var targetButton = $('#data-input').val('');
  
  
}

  
$("#add-data").on("click", function(event) {
    //alert('hello');
    event.preventDefault();
    //console.log(dogs)
    //return;
    addButton();
  })

function displayMyData(dat) {
    
  //alert(dat);
  //return;
  var dog = dat;
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        dog + "&api_key=dc6zaTOxFJmzC&limit=1";
  
  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // When AJAX request comes back
    .done(function(response) {
    
    var results = response.data;
    
    //var test = JSON.parse(results);
    //console.log(test.fixed_height_small_still)
    //console.log(results['fixed_height_small_still']);
     //return;
    var sourc = (results[0].images.fixed_height.url);
    $('#gifs-appear-here').html('<img src="'+sourc+'">');
    //alert(results[0].images.fixed_height.url);
    //console.log(JSON.stringify(results));
    return;
    
    // Create a Div to hold the dog
    var dogDiv = $("<div class='dog'>");
    
    // Element to display rating
   // var p = $("<p>").text("Rating: " + results[0].images.fixed_height.url; 
    
    // Element to hold the image
    var animalImage = $("<img>");
    
    //setting the src attr of the image to a property pulled off result
    animalImage.attr("src", results[i].images.fixed_height.url);
    
    // Append image
    dogDiv.append(p);
    dogDiv.append(image);
    
    // Prepend above previous images
    $("#gifs-appear-here").prepend(dataDiv);
    
    });
  }
 
    
  // Function for displaying data
  //function renderBtn() {
    
    // Delete prior data
    //$("#btn-view").empty();
    
    // Looping through array
    //for (var i = 0; i < data.length; i++) {
      
      // Then generate buttons for each movie in the array
     // var a = $("<button>");
      
      // Add a class to button
      //a.addClass("data");
      
      // Add a data-attribute
     // a.attr("data-name", topics[i]);
      
      // Initial button text
      //a.text(topics[i]);
      
      // Add button to the data-view div
      //$("#btn-view").append(a);
      
    //}
  //}

  // Function for events when a data button is clicked
  //$("#add-data").on("click", function(event) {
   //var topics = ["German Shepard", "Pug", "Husky"];
   // event.preventDefault();

    // Grab input from text array
    
    //topics.push($("#data-input").val().trim());
    //console.log(topics);
    // Add data from text to array
   // topics.push(topic);
    //console.log(topics);
    
    // Call renderBtn which handles the processing of data array
    //renderBtn();
    
  //});
          
      // Pausing gif code 
//    $(".gif").on("click", function() {
//      
//      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
//      var state = $(this).attr("data-state");
//      
//      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
//      // Then, set the image's data-state to animate
//      // Else set src to the data-still value
//      if (state === "still") {
//        
//        $(this).attr("src", $(this).attr("data-animate"));
//        $(this).attr("data-state", "animate");
//        
//      } 
//        else {
//        
//        $(this).attr("src", $(this).attr("data-still"));
//        $(this).attr("data-state", "still");
//        
//        }
//      });