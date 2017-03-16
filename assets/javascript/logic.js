$(document).ready(function() {
  
  // Initial array
  var topics = ["Husky", "Pug", "German Shepard"];
  // Setting a variable for limit
  var limit = 10;

  // Dynamically create buttons
  function createButtons() {
    // Empty content
    $('#buttons').empty();
    
    for(var i = 0; i < topics.length; i++) {
      var b = $("<button>");
      
      b.attr('class', 'button btn btn-lg');
      b.attr('data-name', topics[i]);
      b.text(topics[i]);
      $("#buttons").append(b);
    }
  }
  
  createButtons();
  
  // Call the API with data from button
  function gifQuery() {
    // Empty content
    $("#gifs").empty();
    var dogs = $(this).data('name');
    var queryURL = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + dogs + "&limit=" + limit;
    
    $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
      // Input gifs
      for(var i = 0; i < response.data.length; i++) {
        var div = $('<div>');
        var img = $("<img>");
        var p = $('<p>');
        p.text('Rating ' + response.data[i].rating);
        p.attr('class', 'text-center');
        div.attr('class', 'div-gif');
        img.attr('class', 'gif')
        img.attr('data-state', 'still');
        img.attr('data-still', response.data[i].images.fixed_width_still.url);
        img.attr('data-animate', response.data[i].images.fixed_width.url);
        img.attr('src', response.data[i].images.fixed_width_still.url);
        div.append(p, img);
        $("#gifs").append(div);
      }
    });
  }
  
  // Add buttons from input
  function addButton() {
    var input = $('#search').val();
    topics.push(input);
    createButtons();
  }
  
  // On click functions
  $('#search-button').on('click', addButton);
  $(document).on('click', '.button', gifQuery);
  
  // Animate function
  $(document).on('click', '.gif', function() {
    var state = $(this).attr('data-state');
    var still = $(this).attr('data-still');
    var animate = $(this).attr('data-animate');
    
    if(state === 'still') {
      $(this).attr('data-state', 'animate');
      $(this).attr('src', animate);
    } else {
      $(this).attr('data-state', 'still');
      $(this).attr('src', still);
    }
  });
});